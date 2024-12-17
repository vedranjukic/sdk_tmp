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
import type { LspPosition } from './LspPosition'
import {
  LspPositionFromJSON,
  LspPositionFromJSONTyped,
  LspPositionToJSON,
  LspPositionToJSONTyped,
} from './LspPosition'

/**
 *
 * @export
 * @interface LspRange
 */
export interface LspRange {
  /**
   *
   * @type {LspPosition}
   * @memberof LspRange
   */
  end: LspPosition
  /**
   *
   * @type {LspPosition}
   * @memberof LspRange
   */
  start: LspPosition
}

/**
 * Check if a given object implements the LspRange interface.
 */
export function instanceOfLspRange(value: object): value is LspRange {
  if (!('end' in value) || value['end'] === undefined) return false
  if (!('start' in value) || value['start'] === undefined) return false
  return true
}

export function LspRangeFromJSON(json: any): LspRange {
  return LspRangeFromJSONTyped(json, false)
}

export function LspRangeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LspRange {
  if (json == null) {
    return json
  }
  return {
    end: LspPositionFromJSON(json['end']),
    start: LspPositionFromJSON(json['start']),
  }
}

export function LspRangeToJSON(json: any): LspRange {
  return LspRangeToJSONTyped(json, false)
}

export function LspRangeToJSONTyped(
  value?: LspRange | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value
  }

  return {
    end: LspPositionToJSON(value['end']),
    start: LspPositionToJSON(value['start']),
  }
}
