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

import { mapValues } from '../runtime'
/**
 *
 * @export
 * @interface LspDocumentRequest
 */
export interface LspDocumentRequest {
  /**
   *
   * @type {string}
   * @memberof LspDocumentRequest
   */
  languageId: string
  /**
   *
   * @type {string}
   * @memberof LspDocumentRequest
   */
  pathToProject: string
  /**
   *
   * @type {string}
   * @memberof LspDocumentRequest
   */
  uri: string
}

/**
 * Check if a given object implements the LspDocumentRequest interface.
 */
export function instanceOfLspDocumentRequest(
  value: object,
): value is LspDocumentRequest {
  if (!('languageId' in value) || value['languageId'] === undefined)
    return false
  if (!('pathToProject' in value) || value['pathToProject'] === undefined)
    return false
  if (!('uri' in value) || value['uri'] === undefined) return false
  return true
}

export function LspDocumentRequestFromJSON(json: any): LspDocumentRequest {
  return LspDocumentRequestFromJSONTyped(json, false)
}

export function LspDocumentRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LspDocumentRequest {
  if (json == null) {
    return json
  }
  return {
    languageId: json['languageId'],
    pathToProject: json['pathToProject'],
    uri: json['uri'],
  }
}

export function LspDocumentRequestToJSON(json: any): LspDocumentRequest {
  return LspDocumentRequestToJSONTyped(json, false)
}

export function LspDocumentRequestToJSONTyped(
  value?: LspDocumentRequest | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    languageId: value['languageId'],
    pathToProject: value['pathToProject'],
    uri: value['uri'],
  }
}