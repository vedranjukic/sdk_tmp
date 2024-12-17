# Daytona SDK for Python

A Python SDK for interacting with Daytona Server API, providing a simple interface for workspace management, Git operations, file system operations, and language server protocol support.

## Installation

You can install the package using pip:

```bash
pip install daytona-sdk
```

## Quick Start

Here's a simple example of using the SDK:

```python
from daytona_sdk import Daytona
from daytona_sdk.daytona import CreateWorkspaceParams

# Initialize the Daytona client
daytona = Daytona()

# Create a workspace
params = CreateWorkspaceParams(
    language='python',
    image='ai-test:1'
)
workspace = daytona.create(params)

try:
    # Get workspace root directory
    root_dir = workspace.get_workspace_root_dir()
    
    # Example: Clone a Git repository
    workspace.git.clone(
        url='https://github.com/example/repo',
        path=root_dir
    )
    
    # Example: Run some code
    response = workspace.process.code_run('print("Hello World!")')
    print(response.result)

finally:
    # Cleanup: Remove the workspace
    daytona.remove(workspace)
```

## Features

- **Workspace Management**: Create, manage and remove workspaces
- **Git Operations**: Clone repositories, manage branches, and more
- **File System Operations**: Upload, download, and manipulate files
- **Language Server Protocol**: Interact with language servers for code intelligence
- **Process Management**: Execute code and commands in workspaces

## Configuration

The SDK can be configured using environment variables or by passing a configuration object:

```python
from daytona_sdk import Daytona
from daytona_sdk.daytona import DaytonaConfig

config = DaytonaConfig(
    api_key='your-api-key',
    server_url='https://your-daytona-server',
    target='your-target'
)

daytona = Daytona(config)
```

Or using environment variables:
- `DAYTONA_API_KEY`: Your Daytona API key
- `DAYTONA_SERVER_URL`: The Daytona server URL
- `DAYTONA_TARGET`: Your target environment

## Examples

### File Operations

```python
# Upload a file
workspace.fs.upload_file('/path/to/file.txt', b'Hello, World!')

# Download a file
content = workspace.fs.download_file('/path/to/file.txt')

# Search for files
matches = workspace.fs.find_files(root_dir, 'search_pattern')
```

### Git Operations

```python
# Clone a repository
workspace.git.clone('https://github.com/example/repo', '/path/to/clone')

# List branches
branches = workspace.git.branches('/path/to/repo')

# Add files
workspace.git.add('/path/to/repo', ['file1.txt', 'file2.txt'])
```

### Language Server Protocol

```python
# Create and start a language server
lsp = workspace.create_lsp_server('typescript', '/path/to/project')
lsp.start()

# Get document symbols
symbols = lsp.document_symbols('/path/to/file.ts')

# Get completions
completions = lsp.completions('/path/to/file.ts', {"line": 10, "character": 15})
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your license information here]
```

This README provides a comprehensive overview of the SDK's capabilities and how to use them. You may want to customize it further by:

1. Adding specific installation requirements
2. Including more detailed configuration options
3. Adding troubleshooting guides
4. Including contribution guidelines
5. Specifying the license
6. Adding badges for build status, version, etc.
7. Including links to full documentation if available

Would you like me to modify any section or add additional information?