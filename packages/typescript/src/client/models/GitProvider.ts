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
import type { SigningMethod } from './SigningMethod'
import {
  SigningMethodFromJSON,
  SigningMethodFromJSONTyped,
  SigningMethodToJSON,
  SigningMethodToJSONTyped,
} from './SigningMethod'

/**
 *
 * @export
 * @interface GitProvider
 */
export interface GitProvider {
  /**
   *
   * @type {string}
   * @memberof GitProvider
   */
  alias: string
  /**
   *
   * @type {string}
   * @memberof GitProvider
   */
  baseApiUrl?: string
  /**
   *
   * @type {string}
   * @memberof GitProvider
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof GitProvider
   */
  providerId: string
  /**
   *
   * @type {string}
   * @memberof GitProvider
   */
  signingKey?: string
  /**
   *
   * @type {SigningMethod}
   * @memberof GitProvider
   */
  signingMethod?: SigningMethod
  /**
   *
   * @type {string}
   * @memberof GitProvider
   */
  token: string
  /**
   *
   * @type {string}
   * @memberof GitProvider
   */
  username: string
}

/**
 * Check if a given object implements the GitProvider interface.
 */
export function instanceOfGitProvider(value: object): value is GitProvider {
  if (!('alias' in value) || value['alias'] === undefined) return false
  if (!('id' in value) || value['id'] === undefined) return false
  if (!('providerId' in value) || value['providerId'] === undefined)
    return false
  if (!('token' in value) || value['token'] === undefined) return false
  if (!('username' in value) || value['username'] === undefined) return false
  return true
}

export function GitProviderFromJSON(json: any): GitProvider {
  return GitProviderFromJSONTyped(json, false)
}

export function GitProviderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GitProvider {
  if (json == null) {
    return json
  }
  return {
    alias: json['alias'],
    baseApiUrl: json['baseApiUrl'] == null ? undefined : json['baseApiUrl'],
    id: json['id'],
    providerId: json['providerId'],
    signingKey: json['signingKey'] == null ? undefined : json['signingKey'],
    signingMethod:
      json['signingMethod'] == null
        ? undefined
        : SigningMethodFromJSON(json['signingMethod']),
    token: json['token'],
    username: json['username'],
  }
}

export function GitProviderToJSON(json: any): GitProvider {
  return GitProviderToJSONTyped(json, false)
}

export function GitProviderToJSONTyped(
  value?: GitProvider | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    alias: value['alias'],
    baseApiUrl: value['baseApiUrl'],
    id: value['id'],
    providerId: value['providerId'],
    signingKey: value['signingKey'],
    signingMethod: SigningMethodToJSON(value['signingMethod']),
    token: value['token'],
    username: value['username'],
  }
}