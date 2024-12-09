import { ExecuteResponse, FileInfo, Match, ProjectDirResponse, ReplaceRequest, Workspace as WorkspaceInstance, WorkspaceToolboxApi } from './client';
import { WorkspaceApi, GitProviderApi } from "./client"

export interface WorkspaceCodeToolbox {
    getDefaultImage(): string
    getRunCommand(code: string): string
}

type FilePermissionsParams = {
    group?: string
    mode?: string
    owner?: string
}

export class Workspace {
    constructor(
        public readonly id: string,
        private readonly instance: WorkspaceInstance,
        public readonly toolboxApi: WorkspaceToolboxApi,
        private readonly gitProviderApi: GitProviderApi,
        private readonly codeToolbox: WorkspaceCodeToolbox
    ) { }

    public async getProjectDir(): Promise<string> {
        const response = await this.toolboxApi.getProjectDir({
            workspaceId: this.instance.id,
            projectId: 'main'    //  todo: remove this after project refactor
        })
        return response.dir!
    }

    public async processExecuteCommand(command: string): Promise<ExecuteResponse> {
        return this.toolboxApi.processExecuteCommand({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            params: {
                command
            }
        })
    }

    public codeRun(code: string): Promise<ExecuteResponse> {
        const runCommand = this.codeToolbox.getRunCommand(code)

        return this.toolboxApi.processExecuteCommand({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            params: {
                command: runCommand
            }
        })
    }

    public fsCreateFolder(path: string, mode: string): Promise<void> {
        return this.toolboxApi.fsCreateFolder({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path,
            mode
        })
    }

    public fsDeleteFile(path: string): Promise<void> {
        return this.toolboxApi.fsDeleteFile({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path
        })
    }

    public fsDownloadFile(path: string): Promise<Blob> {
        return this.toolboxApi.fsDownloadFile({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path
        })
    }

    public fsFindFiles(path: string, pattern: string): Promise<Array<Match>> {
        return this.toolboxApi.fsFindInFiles({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path,
            pattern
        })
    }

    public fsGetFileDetails(path: string): Promise<FileInfo> {
        return this.toolboxApi.fsGetFileDetails({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path
        })
    }

    public fsListFiles(path: string): Promise<FileInfo[]> {
        return this.toolboxApi.fsListFiles({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path
        })
    }

    public fsMoveFiles(source: string, destination: string): Promise<void> {
        return this.toolboxApi.fsMoveFile({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            source,
            destination
        })
    }

    public fsReplaceInFiles(files: string[], pattern: string, newValue: string): Promise<Array<Match>> {
        const ReplaceRequest: ReplaceRequest = {
            files,
            newValue,
            pattern
        }

        return this.toolboxApi.fsReplaceInFiles({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            replace: ReplaceRequest
        })
    }

    public fsSearchFiles(path: string, pattern: string): Promise<Array<string>> {
        return this.toolboxApi.fsSearchFiles({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path,
            pattern
        })
    }

    public fsSetFilePermissions(path: string, permissions: FilePermissionsParams): Promise<void> {
        return this.toolboxApi.fsSetFilePermissions({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path,
            group: permissions.group,
            mode: permissions.mode,
            owner: permissions.owner
        })
    }

    public fsUploadFile(path: string, file: Blob): Promise<void> {
        return this.toolboxApi.fsUploadFile({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path,
            file
        })
    }

    public async gitClone(url: string, path?: string, branch?: string, commitId?: string, username?: string, password?: string): Promise<void> {
        const projectDir = await this.getProjectDir()
        path = path || projectDir
        await this.toolboxApi.gitCloneRepository({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            params: {
                url: url,
                branch: branch,
                path,
                username,
                password,
                commitId
            }
        })
    }
}