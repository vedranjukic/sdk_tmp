import { ExecuteResponse, FileInfo, Match, Workspace as WorkspaceInstance } from './client';
import { WorkspaceApi, GitProviderApi } from "./client"

export interface WorkspaceCodeToolbox {
    getDefaultImage(): string
    getRunCommand(code: string): string
}

export class Workspace {
    private workspaceInstance?: WorkspaceInstance

    constructor(
        public readonly id: string,
        private readonly instance: WorkspaceInstance,
        private readonly workspaceApi: WorkspaceApi,
        private readonly gitProviderApi: GitProviderApi,
        private readonly codeToolbox: WorkspaceCodeToolbox
    ) {}

    public async processExecuteCommand(command: string): Promise<ExecuteResponse> {
        return this.workspaceApi.executeCommand({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            params: {
                command
            }
        })
    }

    public codeRun(code: string): Promise<ExecuteResponse> {
        const runCommand = this.codeToolbox.getRunCommand(code)

        return this.workspaceApi.executeCommand({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            params: {
                command: runCommand
            }
        })
    }

    public fsFindFile(path: string, pattern: string): Promise<Array<Match>> {
        return this.workspaceApi.findInFiles({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path,
            pattern
        })
    }

    public fsListFiles(path: string): Promise<FileInfo[]> {
        return this.workspaceApi.listFiles({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path
        })
    }

    public fsUploadFile(path: string, file: Blob): Promise<void> {
        return this.workspaceApi.uploadFile({
            workspaceId: this.instance.id,
            projectId: 'main',    //  todo: remove this after project refactor
            path,
            file
        })
    }
}