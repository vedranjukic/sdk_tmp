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
 * @interface GetRepositoryContext
 */
export interface GetRepositoryContext {
  /**
   *
   * @type {string}
   * @memberof GetRepositoryContext
   */
  branch?: string
  /**
   *
   * @type {string}
   * @memberof GetRepositoryContext
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof GetRepositoryContext
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof GetRepositoryContext
   */
  owner?: string
  /**
   *
   * @type {string}
   * @memberof GetRepositoryContext
   */
  path?: string
  /**
   *
   * @type {number}
   * @memberof GetRepositoryContext
   */
  prNumber?: number
  /**
   *
   * @type {string}
   * @memberof GetRepositoryContext
   */
  sha?: string
  /**
   *
   * @type {string}
   * @memberof GetRepositoryContext
   */
  source?: string
  /**
   *
   * @type {string}
   * @memberof GetRepositoryContext
   */
  url: string
}

/**
 * Check if a given object implements the GetRepositoryContext interface.
 */
export function instanceOfGetRepositoryContext(
  value: object,
): value is GetRepositoryContext {
  if (!('url' in value) || value['url'] === undefined) return false
  return true
}

export function GetRepositoryContextFromJSON(json: any): GetRepositoryContext {
  return GetRepositoryContextFromJSONTyped(json, false)
}

export function GetRepositoryContextFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetRepositoryContext {
  if (json == null) {
    return json
  }
  return {
    branch: json['branch'] == null ? undefined : json['branch'],
    id: json['id'] == null ? undefined : json['id'],
    name: json['name'] == null ? undefined : json['name'],
    owner: json['owner'] == null ? undefined : json['owner'],
    path: json['path'] == null ? undefined : json['path'],
    prNumber: json['prNumber'] == null ? undefined : json['prNumber'],
    sha: json['sha'] == null ? undefined : json['sha'],
    source: json['source'] == null ? undefined : json['source'],
    url: json['url'],
  }
}

export function GetRepositoryContextToJSON(json: any): GetRepositoryContext {
  return GetRepositoryContextToJSONTyped(json, false)
}

export function GetRepositoryContextToJSONTyped(
  value?: GetRepositoryContext | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    branch: value['branch'],
    id: value['id'],
    name: value['name'],
    owner: value['owner'],
    path: value['path'],
    prNumber: value['prNumber'],
    sha: value['sha'],
    source: value['source'],
    url: value['url'],
  }
}
