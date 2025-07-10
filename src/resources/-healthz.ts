// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class _Healthz extends APIResource {
  /**
   * Health check endpoint
   */
  check(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/v1/_healthz', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HealthzCheckResponse = string;

export declare namespace _Healthz {
  export { type HealthzCheckResponse as HealthzCheckResponse };
}
