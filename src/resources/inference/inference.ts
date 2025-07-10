// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchesAPI from './batches';
import {
  Batch,
  BatchCreateParams,
  BatchCreateResponse,
  BatchListParams,
  BatchListResponse,
  BatchMetadata,
  BatchRequest,
  Batches,
  Price,
} from './batches';
import * as ModelsAPI from './models';
import { ModelListResponse, Models } from './models';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Inference extends APIResource {
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);

  checkHealth(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/inference/health', options);
  }
}

export type InferenceCheckHealthResponse = unknown;

Inference.Batches = Batches;
Inference.Models = Models;

export declare namespace Inference {
  export { type InferenceCheckHealthResponse as InferenceCheckHealthResponse };

  export {
    Batches as Batches,
    type Batch as Batch,
    type BatchMetadata as BatchMetadata,
    type BatchRequest as BatchRequest,
    type Price as Price,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchListResponse as BatchListResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };

  export { Models as Models, type ModelListResponse as ModelListResponse };
}
