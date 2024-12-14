import os
import uuid
from typing import Optional, Literal, Dict, Any
from dataclasses import dataclass

from daytona.code_toolbox.workspace_python_code_toolbox import WorkspacePythonCodeToolbox
from daytona.code_toolbox.workspace_ts_code_toolbox import WorkspaceTsCodeToolbox
from daytona.workspace import Workspace
from daytona.client import (
    Configuration, 
    WorkspaceApi, 
    GitProviderApi, 
    WorkspaceToolboxApi,
    CreateProjectDTO
)

# Type definitions
CodeLanguage = Literal['python', 'javascript', 'typescript']

@dataclass
class DaytonaConfig:
    api_key: str
    server_url: str
    target: str

@dataclass
class CreateWorkspaceParams:
    language: CodeLanguage
    id: Optional[str] = None
    image: Optional[str] = None

class Daytona:
    def __init__(self, config: Optional[DaytonaConfig] = None):
        """
        Initialize Daytona instance with optional configuration.
        
        Args:
            config: Optional DaytonaConfig object containing api_key, server_url, and target
        
        Raises:
            ValueError: If API key or Server URL is not provided either through config or environment variables
        """
        # Initialize configuration from either config object or environment variables
        self.api_key = config.api_key if config else os.getenv('DAYTONA_API_KEY')
        if not self.api_key:
            raise ValueError('API key is required')
            
        self.server_url = config.server_url if config else os.getenv('DAYTONA_SERVER_URL')
        if not self.server_url:
            raise ValueError('Server URL is required')
            
        self.target = config.target if config else os.getenv('DAYTONA_TARGET', 'local')

        # Create API configuration
        configuration = Configuration(
            base_path=self.server_url,
            headers={
                'Authorization': f'Bearer {self.api_key}'
            }
        )

        # Initialize API clients
        self.git_provider_api = GitProviderApi(configuration)
        self.workspace_api = WorkspaceApi(configuration)
        self.toolbox_api = WorkspaceToolboxApi(configuration)

    async def create(self, params: Optional[CreateWorkspaceParams] = None) -> Workspace:
        """
        Create a new workspace with the specified parameters.
        
        Args:
            params: Optional CreateWorkspaceParams containing workspace configuration
            
        Returns:
            Workspace: A new workspace instance
            
        Raises:
            ValueError: If an unsupported language is specified
        """
        # Generate workspace ID if not provided
        workspace_id = params.id if params and params.id else f'sandbox-{str(uuid.uuid4())[:8]}'

        # Determine which code toolbox to use
        def get_code_toolbox():
            if not params:
                # Use Python as default language
                return WorkspacePythonCodeToolbox()
            
            match params.language:
                case 'javascript' | 'typescript':
                    return WorkspaceTsCodeToolbox()
                case 'python':
                    return WorkspacePythonCodeToolbox()
                case _:
                    raise ValueError(f'Unsupported language: {params.language}')

        code_toolbox = get_code_toolbox()

        # Create project configuration
        projects = [
            CreateProjectDTO(
                name='main',
                image=params.image if params and params.image else code_toolbox.get_default_image(),
                env_vars={
                    'DAYTONA_SKIP_CLONE': 'true'
                },
                source={
                    # todo: remove when repo is not required
                    'repository': {
                        'branch': 'main',
                        'clone_target': 'branch',
                        'id': 'python-helloworld',
                        'name': 'python-helloworld',
                        'owner': 'dbarnett',
                        'path': None,
                        'pr_number': None,
                        'sha': '288d7ced1b971fd1b3b0c36002b96e1c3f91542e',
                        'source': 'github.com',
                        'url': 'https://github.com/dbarnett/python-helloworld.git'
                    }
                }
            )
        ]

        # Create workspace instance
        workspace_instance = await self.workspace_api.create_workspace(
            workspace={
                'id': workspace_id,
                'name': workspace_id,  # todo: remove this after project refactor
                'projects': projects,
                'target': self.target,
            }
        )

        # Create and return workspace
        workspace = Workspace(workspace_id, workspace_instance, self.toolbox_api, code_toolbox)
        return workspace

    async def remove(self, workspace: Workspace) -> None:
        """
        Remove a workspace.
        
        Args:
            workspace: The workspace to remove
        """
        return await self.workspace_api.remove_workspace(
            workspace_id=workspace.id
        )