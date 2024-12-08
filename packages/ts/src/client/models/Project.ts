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

import { mapValues } from '../runtime';
import type { GitRepository } from './GitRepository';
import {
    GitRepositoryFromJSON,
    GitRepositoryFromJSONTyped,
    GitRepositoryToJSON,
    GitRepositoryToJSONTyped,
} from './GitRepository';
import type { BuildConfig } from './BuildConfig';
import {
    BuildConfigFromJSON,
    BuildConfigFromJSONTyped,
    BuildConfigToJSON,
    BuildConfigToJSONTyped,
} from './BuildConfig';
import type { ProjectState } from './ProjectState';
import {
    ProjectStateFromJSON,
    ProjectStateFromJSONTyped,
    ProjectStateToJSON,
    ProjectStateToJSONTyped,
} from './ProjectState';

/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {BuildConfig}
     * @memberof Project
     */
    buildConfig?: BuildConfig;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Project
     */
    envVars: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    gitProviderConfigId?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    image: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * 
     * @type {GitRepository}
     * @memberof Project
     */
    repository: GitRepository;
    /**
     * 
     * @type {ProjectState}
     * @memberof Project
     */
    state?: ProjectState;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    target: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    user: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    workspaceId: string;
}

/**
 * Check if a given object implements the Project interface.
 */
export function instanceOfProject(value: object): value is Project {
    if (!('envVars' in value) || value['envVars'] === undefined) return false;
    if (!('image' in value) || value['image'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('repository' in value) || value['repository'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('workspaceId' in value) || value['workspaceId'] === undefined) return false;
    return true;
}

export function ProjectFromJSON(json: any): Project {
    return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
    if (json == null) {
        return json;
    }
    return {
        
        'buildConfig': json['buildConfig'] == null ? undefined : BuildConfigFromJSON(json['buildConfig']),
        'envVars': json['envVars'],
        'gitProviderConfigId': json['gitProviderConfigId'] == null ? undefined : json['gitProviderConfigId'],
        'image': json['image'],
        'name': json['name'],
        'repository': GitRepositoryFromJSON(json['repository']),
        'state': json['state'] == null ? undefined : ProjectStateFromJSON(json['state']),
        'target': json['target'],
        'user': json['user'],
        'workspaceId': json['workspaceId'],
    };
}

export function ProjectToJSON(json: any): Project {
    return ProjectToJSONTyped(json, false);
}

export function ProjectToJSONTyped(value?: Project | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'buildConfig': BuildConfigToJSON(value['buildConfig']),
        'envVars': value['envVars'],
        'gitProviderConfigId': value['gitProviderConfigId'],
        'image': value['image'],
        'name': value['name'],
        'repository': GitRepositoryToJSON(value['repository']),
        'state': ProjectStateToJSON(value['state']),
        'target': value['target'],
        'user': value['user'],
        'workspaceId': value['workspaceId'],
    };
}
