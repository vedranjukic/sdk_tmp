import { Daytona } from '@daytona/sdk';

async function main() {
  const daytona = new Daytona();

  try {
    //  first, create a workspace
    const workspace = await daytona.create({
      language: 'python'
    })

    //  now, run some code
    const result = await workspace.codeRun('print("Hello, World!")');
    if (result.code !== 0) {
      console.error('Error running code:', result.code);
    } else {
      console.log(result.result)
    }

    //  we're done, remove the workspace
    await daytona.remove(workspace);
  } catch (error) {
    console.error('Error creating workspace:', error);
  }
}

main();