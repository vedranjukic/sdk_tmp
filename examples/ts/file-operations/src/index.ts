import * as path from 'path';
import { Daytona } from '@daytona/sdk';

async function main() {
  const daytona = new Daytona();

  try {
    //  first, create a workspace
    const workspace = await daytona.create()

    const projectDir = await workspace.getProjectDir()

    //  list files in the workspace
    const files = await workspace.fsListFiles(projectDir);
    console.log('Files:', files);

    //  create a new directory in the workspace
    const newDir = path.join(projectDir, 'new-dir')
    await workspace.fsCreateFolder(newDir, '755');

    //  add a new file to the workspace
    const fileContent = new Blob([Buffer.from('Hello, World!')], { type: 'text/plain' });
    const fileToUpload = new File([fileContent], 'data.txt', { type: 'text/plain' });
    await workspace.fsUploadFile(newDir, fileToUpload);

    //  search for the file we just added
    const matches = await workspace.fsFindFiles(projectDir, 'World!');
    console.log('Matches:', matches);

    //  replace the contents of the file
    await workspace.fsReplaceInFiles([path.join(newDir, 'data.txt')], 'Hello, World!', 'Goodbye, World!');

    //  read the file
    const downloadedFile = await workspace.fsDownloadFile(path.join(newDir, 'data.txt'));
    console.log('File content:', await downloadedFile.text());

    //  change the file permissions
    await workspace.fsSetFilePermissions(path.join(newDir, 'data.txt'), { mode: '777' });

    //  get file info
    const fileInfo = await workspace.fsGetFileDetails(path.join(newDir, 'data.txt'));
    console.log('File info:', fileInfo);  //  should show the new permissions

    //  move the file to the new location
    await workspace.fsMoveFiles(path.join(newDir, 'data.txt'), path.join(projectDir, 'moved-data.txt'));

    //  find the file in the new location
    const searchResults = await workspace.fsSearchFiles(projectDir, 'moved-data.txt');
    console.log('Search results:', searchResults);

    //  delete the file
    await workspace.fsDeleteFile(path.join(projectDir, 'moved-data.txt'));

    //  we're done, remove the workspace
    await daytona.remove(workspace);
  } catch (error) {
    console.error('Error creating workspace:', error);
  }
}

main();