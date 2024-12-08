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
 * @interface ExecuteResponse
 */
export interface ExecuteResponse {
    /**
     * 
     * @type {number}
     * @memberof ExecuteResponse
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ExecuteResponse
     */
    result?: string;
}

/**
 * Check if a given object implements the ExecuteResponse interface.
 */
export function instanceOfExecuteResponse(value: object): value is ExecuteResponse {
    return true;
}

export function ExecuteResponseFromJSON(json: any): ExecuteResponse {
    return ExecuteResponseFromJSONTyped(json, false);
}

export function ExecuteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecuteResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'result': json['result'] == null ? undefined : json['result'],
    };
}

export function ExecuteResponseToJSON(json: any): ExecuteResponse {
    return ExecuteResponseToJSONTyped(json, false);
}

export function ExecuteResponseToJSONTyped(value?: ExecuteResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'result': value['result'],
    };
}

