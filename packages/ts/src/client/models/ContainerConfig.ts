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
 * @interface ContainerConfig
 */
export interface ContainerConfig {
    /**
     * 
     * @type {string}
     * @memberof ContainerConfig
     */
    image: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerConfig
     */
    user: string;
}

/**
 * Check if a given object implements the ContainerConfig interface.
 */
export function instanceOfContainerConfig(value: object): value is ContainerConfig {
    if (!('image' in value) || value['image'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    return true;
}

export function ContainerConfigFromJSON(json: any): ContainerConfig {
    return ContainerConfigFromJSONTyped(json, false);
}

export function ContainerConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'image': json['image'],
        'user': json['user'],
    };
}

export function ContainerConfigToJSON(json: any): ContainerConfig {
    return ContainerConfigToJSONTyped(json, false);
}

export function ContainerConfigToJSONTyped(value?: ContainerConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'image': value['image'],
        'user': value['user'],
    };
}

