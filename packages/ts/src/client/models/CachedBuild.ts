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
 * @interface CachedBuild
 */
export interface CachedBuild {
    /**
     * 
     * @type {string}
     * @memberof CachedBuild
     */
    image: string;
    /**
     * 
     * @type {string}
     * @memberof CachedBuild
     */
    user: string;
}

/**
 * Check if a given object implements the CachedBuild interface.
 */
export function instanceOfCachedBuild(value: object): value is CachedBuild {
    if (!('image' in value) || value['image'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    return true;
}

export function CachedBuildFromJSON(json: any): CachedBuild {
    return CachedBuildFromJSONTyped(json, false);
}

export function CachedBuildFromJSONTyped(json: any, ignoreDiscriminator: boolean): CachedBuild {
    if (json == null) {
        return json;
    }
    return {
        
        'image': json['image'],
        'user': json['user'],
    };
}

export function CachedBuildToJSON(json: any): CachedBuild {
    return CachedBuildToJSONTyped(json, false);
}

export function CachedBuildToJSONTyped(value?: CachedBuild | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'image': value['image'],
        'user': value['user'],
    };
}

