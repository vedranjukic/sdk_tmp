import { Daytona } from '@daytona/sdk';

async function main() {
  const daytona = new Daytona();

  try {
    //  first, create a workspace
    const workspace = await daytona.create()

    //  list files in the workspace
    const files = await workspace.fsListFiles('/home/daytona');
    console.log('Files:', files);

    //  add a new file to the workspace
    await workspace.fsUploadFile('/home/daytona/data.txt', new Blob([Buffer.from('Hello, World!')], { type: 'text/plain' }));

    //  search for the file we just added
    const matches = await workspace.fsFindFile('/home/daytona', 'data*');
    console.log('Matches:', matches);

    //  we're done, remove the workspace
    await daytona.remove(workspace);
  } catch (error) {
    console.error('Error creating workspace:', error);
  }
}

main();