from typing import Protocol
from apiclient import Workspace as WorkspaceInstance, WorkspaceToolboxApi

class WorkspaceCodeToolbox(Protocol):
    def get_default_image(self) -> str: ...
    def get_run_command(self, code: str) -> str: ... 