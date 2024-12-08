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
export const BuildBuildState = {
    BuildStatePendingRun: 'pending-run',
    BuildStateRunning: 'running',
    BuildStateError: 'error',
    BuildStateSuccess: 'success',
    BuildStatePublished: 'published',
    BuildStatePendingDelete: 'pending-delete',
    BuildStatePendingForcedDelete: 'pending-forced-delete',
    BuildStateDeleting: 'deleting'
} as const;
export type BuildBuildState = typeof BuildBuildState[keyof typeof BuildBuildState];


export function instanceOfBuildBuildState(value: any): boolean {
    for (const key in BuildBuildState) {
        if (Object.prototype.hasOwnProperty.call(BuildBuildState, key)) {
            if (BuildBuildState[key as keyof typeof BuildBuildState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BuildBuildStateFromJSON(json: any): BuildBuildState {
    return BuildBuildStateFromJSONTyped(json, false);
}

export function BuildBuildStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBuildState {
    return json as BuildBuildState;
}

export function BuildBuildStateToJSON(value?: BuildBuildState | null): any {
    return value as any;
}

export function BuildBuildStateToJSONTyped(value: any, ignoreDiscriminator: boolean): BuildBuildState {
    return value as BuildBuildState;
}

