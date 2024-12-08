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
/**
 * 
 * @export
 * @interface RepositoryUrl
 */
export interface RepositoryUrl {
    /**
     * 
     * @type {string}
     * @memberof RepositoryUrl
     */
    url: string;
}

/**
 * Check if a given object implements the RepositoryUrl interface.
 */
export function instanceOfRepositoryUrl(value: object): value is RepositoryUrl {
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function RepositoryUrlFromJSON(json: any): RepositoryUrl {
    return RepositoryUrlFromJSONTyped(json, false);
}

export function RepositoryUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepositoryUrl {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function RepositoryUrlToJSON(json: any): RepositoryUrl {
    return RepositoryUrlToJSONTyped(json, false);
}

export function RepositoryUrlToJSONTyped(value?: RepositoryUrl | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'url': value['url'],
    };
}

