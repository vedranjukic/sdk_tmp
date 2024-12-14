from typing import List, Dict, Literal
from .client import CompletionList, LspSymbol, WorkspaceInstance, WorkspaceToolboxApi

LspLanguageId = Literal['typescript']

class Position:
    def __init__(self, line: int, character: int):
        self.line = line
        self.character = character

class LspServer:
    def __init__(self, language_id: LspLanguageId, path_to_project: str,
                 toolbox_api: WorkspaceToolboxApi, instance: WorkspaceInstance):
        self.language_id = language_id
        self.path_to_project = path_to_project
        self.toolbox_api = toolbox_api
        self.instance = instance
    
    async def start(self) -> None:
        await self.toolbox_api.lsp_start(
            workspace_id=self.instance.id,
            project_id='main',
            params={
                'language_id': self.language_id,
                'path_to_project': self.path_to_project
            }
        )
    
    async def stop(self) -> None:
        await self.toolbox_api.lsp_stop(
            workspace_id=self.instance.id,
            project_id='main',
            params={
                'language_id': self.language_id,
                'path_to_project': self.path_to_project
            }
        )
    
    async def did_open(self, path: str) -> None:
        await self.toolbox_api.lsp_did_open(
            workspace_id=self.instance.id,
            project_id='main',
            params={
                'language_id': self.language_id,
                'path_to_project': self.path_to_project,
                'uri': f'file://{path}'
            }
        )
    
    async def did_close(self, path: str) -> None:
        await self.toolbox_api.lsp_did_close(
            workspace_id=self.instance.id,
            project_id='main',
            params={
                'language_id': self.language_id,
                'path_to_project': self.path_to_project,
                'uri': f'file://{path}'
            }
        )
    
    async def document_symbols(self, path: str) -> List[LspSymbol]:
        return await self.toolbox_api.lsp_document_symbols(
            workspace_id=self.instance.id,
            project_id='main',
            language_id=self.language_id,
            path_to_project=self.path_to_project,
            uri=f'file://{path}'
        )
    
    async def workspace_symbols(self, query: str) -> List[LspSymbol]:
        return await self.toolbox_api.lsp_workspace_symbols(
            workspace_id=self.instance.id,
            project_id='main',
            language_id=self.language_id,
            path_to_project=self.path_to_project,
            query=query
        )
    
    async def completions(self, path: str, position: Position) -> CompletionList:
        return await self.toolbox_api.lsp_completions(
            workspace_id=self.instance.id,
            project_id='main',
            params={
                'language_id': self.language_id,
                'path_to_project': self.path_to_project,
                'uri': f'file://{path}',
                'position': position
            }
        )