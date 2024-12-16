from daytona_sdk import Daytona
from daytona_sdk.daytona import CreateWorkspaceParams

daytona = Daytona()
    
# Create workspace with Python language
params = CreateWorkspaceParams(
    language='python',
    image='ai-test:1'
)
workspace = daytona.create(params)

response = workspace.process.code_run('print("Hello World! " + str(3 + 4))')
if response.code != 0:
    print(f"Error: {response.code} {response.result}")
else:
    print(response.result)

daytona.remove(workspace)
