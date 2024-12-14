from typing import List, Optional
from .client import GitStatus, ListBranchResponse, Match, WorkspaceInstance, WorkspaceToolboxApi
from .workspace import Workspace

class Git:
    def __init__(self, workspace: Workspace, toolbox_api: WorkspaceToolboxApi, instance: WorkspaceInstance):
        self.workspace = workspace
        self.toolbox_api = toolbox_api
        self.instance = instance
    
    async def add(self, path: str, files: List[str]) -> None:
        await self.toolbox_api.git_add_files(
            workspace_id=self.instance.id,
            project_id='main',
            params={
                'path': path,
                'files': files
            }
        )
    
    async def branches(self, path: str) -> ListBranchResponse:
        return await self.toolbox_api.git_branch_list(
            workspace_id=self.instance.id,
            project_id='main',
            path=path
        )
    
    async def clone(self, url: str, path: Optional[str] = None, branch: Optional[str] = None,
                   commit_id: Optional[str] = None, username: Optional[str] = None,
                   password: Optional[str] = None) -> None:
        project_dir = await self.workspace.get_workspace_root_dir()
        path = path or project_dir
        
        await self.toolbox_api.git_clone_repository(
            workspace_id=self.instance.id,
            project_id='main',
            params={
                'url': url,
                'branch': branch,
                'path': path,
                'username': username,
                'password': password,
                'commit_id': commit_id
            }
        )
    
    async def commit(self, path: str, message: str, author: str, email: str) -> None:
        await self.toolbox_api.git_commit_changes(
            workspace_id=self.instance.id,
            project_id='main',
            params={
                'path': path,
                'message': message,
                'author': author,
                'email': email
            }
        )
    
    async def push(self, path: str, username: Optional[str] = None, password: Optional[str] = None) -> None:
        await self.toolbox_api.git_push_changes(
            workspace_id=self.instance.id,
            project_id='main',
            params={
                'path': path,
                'username': username,
                'password': password
            }
        )
    
    async def pull(self, path: str, username: Optional[str] = None, password: Optional[str] = None) -> None:
        await self.toolbox_api.git_pull_changes(
            workspace_id=self.instance.id,
            project_id='main',
            params={
                'path': path,
                'username': username,
                'password': password
            }
        )
    
    async def status(self, path: str) -> GitStatus:
        return await self.toolbox_api.git_git_status(
            workspace_id=self.instance.id,
            project_id='main',
            path=path
        )