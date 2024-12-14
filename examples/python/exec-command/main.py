import asyncio
import os
from dotenv import load_dotenv
from daytona import Daytona, CreateWorkspaceParams

load_dotenv()  # loads .env
load_dotenv(".env.local", override=True)  # loads .env.local and overrides any existing values

async def main():
    daytona = Daytona()
    
    try:
        workspace = await daytona.create(CreateWorkspaceParams(
            language='python',
            image='ai-test:1'
        ))

        try:
            result = await workspace.process.code_run('print("Hello World! " + str(3 + 4))')
            if result.code != 0:
                print(f'Error running code: {result.code}')
            else:
                print(result.result)
        except Exception as error:
            print(f'Error running code: {error}')
        finally:
            await daytona.remove(workspace)
    except Exception as error:
        print(f'Error creating workspace: {error}')

if __name__ == '__main__':
    asyncio.run(main())