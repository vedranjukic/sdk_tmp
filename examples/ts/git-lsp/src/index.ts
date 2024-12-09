import * as path from 'path';
import { Daytona } from '@daytona/sdk';

async function main() {
  const daytona = new Daytona();

  try {
    //  first, create a workspace
    const workspace = await daytona.create({
      language: 'python'
    })

    const projectDir = await workspace.getProjectDir()

   await workspace.gitClone('https://github.com/panaverse/learn-typescript', path.join(projectDir, 'learn-typescript'));

    //  we're done, remove the workspace
    await daytona.remove(workspace);
  } catch (error) {
    console.error('Error creating workspace:', error);
  }
}

main();