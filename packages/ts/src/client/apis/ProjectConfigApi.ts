/* tslint:disable */
/* eslint-disable */
/**
 * Daytona Server API
 * Daytona Server API
 *
 * The version of the OpenAPI document: v0.0.0-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateProjectConfigDTO,
  ProjectConfig,
} from '../models/index';
import {
    CreateProjectConfigDTOFromJSON,
    CreateProjectConfigDTOToJSON,
    ProjectConfigFromJSON,
    ProjectConfigToJSON,
} from '../models/index';

export interface DeleteProjectConfigRequest {
    configName: string;
    force?: boolean;
}

export interface GetDefaultProjectConfigRequest {
    gitUrl: string;
}

export interface GetProjectConfigRequest {
    configName: string;
}

export interface SetDefaultProjectConfigRequest {
    configName: string;
}

export interface SetProjectConfigRequest {
    projectConfig: CreateProjectConfigDTO;
}

/**
 * 
 */
export class ProjectConfigApi extends runtime.BaseAPI {

    /**
     * Delete project config data
     * Delete project config data
     */
    async deleteProjectConfigRaw(requestParameters: DeleteProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['configName'] == null) {
            throw new runtime.RequiredError(
                'configName',
                'Required parameter "configName" was null or undefined when calling deleteProjectConfig().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['force'] != null) {
            queryParameters['force'] = requestParameters['force'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config/{configName}`.replace(`{${"configName"}}`, encodeURIComponent(String(requestParameters['configName']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete project config data
     * Delete project config data
     */
    async deleteProjectConfig(requestParameters: DeleteProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProjectConfigRaw(requestParameters, initOverrides);
    }

    /**
     * Get project configs by git url
     * Get project configs by git url
     */
    async getDefaultProjectConfigRaw(requestParameters: GetDefaultProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectConfig>> {
        if (requestParameters['gitUrl'] == null) {
            throw new runtime.RequiredError(
                'gitUrl',
                'Required parameter "gitUrl" was null or undefined when calling getDefaultProjectConfig().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config/default/{gitUrl}`.replace(`{${"gitUrl"}}`, encodeURIComponent(String(requestParameters['gitUrl']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectConfigFromJSON(jsonValue));
    }

    /**
     * Get project configs by git url
     * Get project configs by git url
     */
    async getDefaultProjectConfig(requestParameters: GetDefaultProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectConfig> {
        const response = await this.getDefaultProjectConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get project config data
     * Get project config data
     */
    async getProjectConfigRaw(requestParameters: GetProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectConfig>> {
        if (requestParameters['configName'] == null) {
            throw new runtime.RequiredError(
                'configName',
                'Required parameter "configName" was null or undefined when calling getProjectConfig().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config/{configName}`.replace(`{${"configName"}}`, encodeURIComponent(String(requestParameters['configName']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectConfigFromJSON(jsonValue));
    }

    /**
     * Get project config data
     * Get project config data
     */
    async getProjectConfig(requestParameters: GetProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectConfig> {
        const response = await this.getProjectConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List project configs
     * List project configs
     */
    async listProjectConfigsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectConfig>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProjectConfigFromJSON));
    }

    /**
     * List project configs
     * List project configs
     */
    async listProjectConfigs(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectConfig>> {
        const response = await this.listProjectConfigsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Set project config to default
     * Set project config to default
     */
    async setDefaultProjectConfigRaw(requestParameters: SetDefaultProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['configName'] == null) {
            throw new runtime.RequiredError(
                'configName',
                'Required parameter "configName" was null or undefined when calling setDefaultProjectConfig().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config/{configName}/set-default`.replace(`{${"configName"}}`, encodeURIComponent(String(requestParameters['configName']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Set project config to default
     * Set project config to default
     */
    async setDefaultProjectConfig(requestParameters: SetDefaultProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.setDefaultProjectConfigRaw(requestParameters, initOverrides);
    }

    /**
     * Set project config data
     * Set project config data
     */
    async setProjectConfigRaw(requestParameters: SetProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['projectConfig'] == null) {
            throw new runtime.RequiredError(
                'projectConfig',
                'Required parameter "projectConfig" was null or undefined when calling setProjectConfig().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/project-config`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateProjectConfigDTOToJSON(requestParameters['projectConfig']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Set project config data
     * Set project config data
     */
    async setProjectConfig(requestParameters: SetProjectConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.setProjectConfigRaw(requestParameters, initOverrides);
    }

}
