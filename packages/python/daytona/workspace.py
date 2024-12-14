from typing import Protocol
from .filesystem import FileSystem
from .git import Git
from .process import Process
from .lsp_server import LspServer, LspLanguageId
from .client import WorkspaceInstance, WorkspaceToolboxApi

class WorkspaceCodeToolbox(Protocol):
    def get_default_image(self) -> str: ...
    def get_run_command(self, code: str) -> str: ...

class Workspace:
    def __init__(self, id: str, instance: WorkspaceInstance, 
                 toolbox_api: WorkspaceToolboxApi, 
                 code_toolbox: WorkspaceCodeToolbox):
        self.id = id
        self.instance = instance
        self.toolbox_api = toolbox_api
        self.code_toolbox = code_toolbox
        
        # Initialize components
        self.fs = FileSystem(instance, self.toolbox_api)
        self.git = Git(self, self.toolbox_api, instance)
        self.process = Process(self.code_toolbox, self.toolbox_api, instance)

    async def get_workspace_root_dir(self) -> str:
        response = await self.toolbox_api.get_project_dir(
            workspace_id=self.instance.id,
            project_id='main'  # todo: remove this after project refactor
        )
        return response.dir

    def create_lsp_server(self, language_id: LspLanguageId, path_to_project: str) -> LspServer:
        return LspServer(language_id, path_to_project, self.toolbox_api, self.instance)