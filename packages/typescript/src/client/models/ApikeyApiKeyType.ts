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

/**
 *
 * @export
 */
export const ApikeyApiKeyType = {
  ApiKeyTypeClient: 'client',
  ApiKeyTypeProject: 'project',
  ApiKeyTypeWorkspace: 'workspace',
} as const
export type ApikeyApiKeyType =
  (typeof ApikeyApiKeyType)[keyof typeof ApikeyApiKeyType]

export function instanceOfApikeyApiKeyType(value: any): boolean {
  for (const key in ApikeyApiKeyType) {
    if (Object.prototype.hasOwnProperty.call(ApikeyApiKeyType, key)) {
      if (ApikeyApiKeyType[key as keyof typeof ApikeyApiKeyType] === value) {
        return true
      }
    }
  }
  return false
}

export function ApikeyApiKeyTypeFromJSON(json: any): ApikeyApiKeyType {
  return ApikeyApiKeyTypeFromJSONTyped(json, false)
}

export function ApikeyApiKeyTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApikeyApiKeyType {
  return json as ApikeyApiKeyType
}

export function ApikeyApiKeyTypeToJSON(value?: ApikeyApiKeyType | null): any {
  return value as any
}

export function ApikeyApiKeyTypeToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): ApikeyApiKeyType {
  return value as ApikeyApiKeyType
}