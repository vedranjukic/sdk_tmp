from typing import Optional
from .client import ExecuteResponse, WorkspaceInstance, WorkspaceToolboxApi
from .workspace import WorkspaceCodeToolbox

class Process:
    def __init__(self, code_toolbox: WorkspaceCodeToolbox, toolbox_api: WorkspaceToolboxApi, 
                 instance: WorkspaceInstance):
        self.code_toolbox = code_toolbox
        self.toolbox_api = toolbox_api
        self.instance = instance
    
    async def process_execute_command(self, command: str) -> ExecuteResponse:
        return await self.toolbox_api.process_execute_command(
            workspace_id=self.instance.id,
            project_id='main',  # todo: remove this after project refactor
            params={
                'command': command
            }
        )
    
    async def code_run(self, code: str) -> ExecuteResponse:
        run_command = self.code_toolbox.get_run_command(code)
        
        return await self.toolbox_api.process_execute_command(
            workspace_id=self.instance.id,
            project_id='main',  # todo: remove this after project refactor
            params={
                'command': run_command
            }
        )