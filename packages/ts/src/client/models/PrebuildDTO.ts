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
 * @interface PrebuildDTO
 */
export interface PrebuildDTO {
    /**
     * 
     * @type {string}
     * @memberof PrebuildDTO
     */
    branch: string;
    /**
     * 
     * @type {number}
     * @memberof PrebuildDTO
     */
    commitInterval?: number;
    /**
     * 
     * @type {string}
     * @memberof PrebuildDTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PrebuildDTO
     */
    projectConfigName: string;
    /**
     * 
     * @type {number}
     * @memberof PrebuildDTO
     */
    retention: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof PrebuildDTO
     */
    triggerFiles?: Array<string>;
}

/**
 * Check if a given object implements the PrebuildDTO interface.
 */
export function instanceOfPrebuildDTO(value: object): value is PrebuildDTO {
    if (!('branch' in value) || value['branch'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('projectConfigName' in value) || value['projectConfigName'] === undefined) return false;
    if (!('retention' in value) || value['retention'] === undefined) return false;
    return true;
}

export function PrebuildDTOFromJSON(json: any): PrebuildDTO {
    return PrebuildDTOFromJSONTyped(json, false);
}

export function PrebuildDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrebuildDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'branch': json['branch'],
        'commitInterval': json['commitInterval'] == null ? undefined : json['commitInterval'],
        'id': json['id'],
        'projectConfigName': json['projectConfigName'],
        'retention': json['retention'],
        'triggerFiles': json['triggerFiles'] == null ? undefined : json['triggerFiles'],
    };
}

export function PrebuildDTOToJSON(json: any): PrebuildDTO {
    return PrebuildDTOToJSONTyped(json, false);
}

export function PrebuildDTOToJSONTyped(value?: PrebuildDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'branch': value['branch'],
        'commitInterval': value['commitInterval'],
        'id': value['id'],
        'projectConfigName': value['projectConfigName'],
        'retention': value['retention'],
        'triggerFiles': value['triggerFiles'],
    };
}

