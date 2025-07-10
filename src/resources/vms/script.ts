// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Script extends APIResource {
  create(body: ScriptCreateParams, options?: RequestOptions): APIPromise<ScriptCreateResponse> {
    return this._client.post('/v0/vms/script', { body, ...options });
  }

  retrieve(options?: RequestOptions): APIPromise<ScriptRetrieveResponse> {
    return this._client.get('/v0/vms/script', options);
  }
}

/**
 * if the script is valid utf8 then the response may be in either string, or byte
 * form and the client must handle both
 */
export type UserData = string | Array<number>;

export interface ScriptCreateResponse {
  /**
   * if the script is valid utf8 then the response may be in either string, or byte
   * form and the client must handle both
   */
  script: UserData;
}

export interface ScriptRetrieveResponse {
  /**
   * if the script is valid utf8 then the response may be in either string, or byte
   * form and the client must handle both
   */
  script: UserData;
}

export interface ScriptCreateParams {
  /**
   * if the script is valid utf8 then the response may be in either string, or byte
   * form and the client must handle both
   */
  script: UserData;
}

export declare namespace Script {
  export {
    type UserData as UserData,
    type ScriptCreateResponse as ScriptCreateResponse,
    type ScriptRetrieveResponse as ScriptRetrieveResponse,
    type ScriptCreateParams as ScriptCreateParams,
  };
}
