# Daytona SDK

The Daytona SDK is a powerful toolkit that enables developers to programmatically manage development workspaces, handle Git operations, integrate Language Server Protocol (LSP) functionality, and perform file operations. It provides a clean, intuitive API for both Python and TypeScript implementations.

## What is Daytona SDK?

Daytona SDK is a development toolkit that allows you to:
- Create and manage isolated development workspaces
- Execute Git operations programmatically
- Integrate Language Server Protocol (LSP) for code intelligence
- Perform file system operations
- Execute code and commands within workspaces

## Getting Started

### Installation

For Python:
```bash
pip install daytona-sdk
```

### Basic Setup

```python
from daytona_sdk import Daytona
from daytona_sdk.daytona import CreateWorkspaceParams

# Initialize the SDK
daytona = Daytona()

# Create a workspace
params = CreateWorkspaceParams(
    language='python',
    image='ai-test:1'
)
workspace = daytona.create(params)
```

## Features and Usage

### 1. Workspace Management

Create and manage development workspaces:

```python
# Create a workspace
workspace = daytona.create(params)

# Get workspace root directory
root_dir = workspace.get_workspace_root_dir()

# Clean up when done
daytona.remove(workspace)
```

### 2. Git Operations

Perform Git operations within your workspace:

```python
# Clone a repository
workspace.git.clone(
    'https://github.com/username/repo',
    'target_directory',
    'branch_name'
)
```

### 3. File Operations

Manage files and directories:

```python
# List files
files = workspace.fs.list_files(directory)

# Create directories
workspace.fs.create_folder(path, '755')

# Upload files
workspace.fs.upload_file(file_path, content)

# Search files
matches = workspace.fs.find_files(directory, 'search_term')

# Modify files
workspace.fs.replace_in_files([file_path], 'old_text', 'new_text')

# Read files
content = workspace.fs.download_file(file_path)
```

### 4. Language Server Protocol (LSP)

Integrate code intelligence features:

```python
# Create and start LSP server
lsp = workspace.create_lsp_server('typescript', project_dir)
lsp.start()

# Work with documents
lsp.did_open(file_path)
symbols = lsp.document_symbols(file_path)
completions = lsp.completions(file_path, {
    "line": line_number,
    "character": char_position
})
```

### 5. Process Execution

Execute code within workspaces:

```python
# Run code
response = workspace.process.code_run('print("Hello World!")')
if response.code == 0:
    print(response.result)
```

## Best Practices

1. Always clean up workspaces when done:
```python
try:
    # Your workspace operations here
finally:
    daytona.remove(workspace)
```

2. Use proper error handling:
```python
try:
    workspace = daytona.create(params)
    # Your operations here
except Exception as error:
    print(f"Error: {error}")
finally:
    daytona.remove(workspace)
```

## Examples

Check out the `examples` directory for complete working examples:
- `examples/python/exec-command`: Execute commands in workspaces
- `examples/python/file-operations`: File system operations
- `examples/python/git-lsp`: Git operations and LSP integration

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

[License information to be added]
