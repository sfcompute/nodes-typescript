// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Models extends APIResource {
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/v1/inference/models', options);
  }

  retrieveHistory(modelID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v1/inference/models/${modelID}/history`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ModelListResponse = Array<ModelListResponse.ModelListResponseItem>;

export namespace ModelListResponse {
  export interface ModelListResponseItem {
    id: string;

    max_price_per_million_input_tokens: number;
  }
}

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse };
}
