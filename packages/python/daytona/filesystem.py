from typing import List, Optional
from .client import (
    FileInfo, 
    Match, 
    ReplaceRequest, 
    ReplaceResult, 
    SearchFilesResponse, 
    WorkspaceInstance, 
    WorkspaceToolboxApi
)

class FileSystem:
    def __init__(self, instance: WorkspaceInstance, toolbox_api: WorkspaceToolboxApi):
        self.instance = instance
        self.toolbox_api = toolbox_api
    
    async def create_folder(self, path: str, mode: str) -> None:
        await self.toolbox_api.fs_create_folder(
            workspace_id=self.instance.id,
            project_id='main',
            path=path,
            mode=mode
        )
    
    async def delete_file(self, path: str) -> None:
        await self.toolbox_api.fs_delete_file(
            workspace_id=self.instance.id,
            project_id='main',
            path=path
        )
    
    async def download_file(self, path: str) -> bytes:
        return await self.toolbox_api.fs_download_file(
            workspace_id=self.instance.id,
            project_id='main',
            path=path
        )
    
    async def find_files(self, path: str, pattern: str) -> List[Match]:
        return await self.toolbox_api.fs_find_in_files(
            workspace_id=self.instance.id,
            project_id='main',
            path=path,
            pattern=pattern
        )
    
    async def get_file_details(self, path: str) -> FileInfo:
        return await self.toolbox_api.fs_get_file_details(
            workspace_id=self.instance.id,
            project_id='main',
            path=path
        )
    
    async def list_files(self, path: str) -> List[FileInfo]:
        return await self.toolbox_api.fs_list_files(
            workspace_id=self.instance.id,
            project_id='main',
            path=path
        )
    
    async def move_files(self, source: str, destination: str) -> None:
        await self.toolbox_api.fs_move_file(
            workspace_id=self.instance.id,
            project_id='main',
            source=source,
            destination=destination
        )
    
    async def replace_in_files(self, files: List[str], pattern: str, new_value: str) -> List[ReplaceResult]:
        replace_request = ReplaceRequest(
            files=files,
            new_value=new_value,
            pattern=pattern
        )
        
        return await self.toolbox_api.fs_replace_in_files(
            workspace_id=self.instance.id,
            project_id='main',
            replace=replace_request
        )
    
    async def search_files(self, path: str, pattern: str) -> SearchFilesResponse:
        return await self.toolbox_api.fs_search_files(
            workspace_id=self.instance.id,
            project_id='main',
            path=path,
            pattern=pattern
        )
    
    async def set_file_permissions(self, path: str, permissions: dict) -> None:
        await self.toolbox_api.fs_set_file_permissions(
            workspace_id=self.instance.id,
            project_id='main',
            path=path,
            group=permissions.get('group'),
            mode=permissions.get('mode'),
            owner=permissions.get('owner')
        )
    
    async def upload_file(self, path: str, file: bytes) -> None:
        await self.toolbox_api.fs_upload_file(
            workspace_id=self.instance.id,
            project_id='main',
            path=path,
            file=file
        )