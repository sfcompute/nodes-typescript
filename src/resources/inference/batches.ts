// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Batches extends APIResource {
  create(params: BatchCreateParams, options?: RequestOptions): APIPromise<BatchCreateResponse> {
    const body = 'body' in params ? params.body : params;
    return this._client.post('/v1/inference/batches', { body, ...options });
  }

  retrieve(batchID: string, options?: RequestOptions): APIPromise<Batch> {
    return this._client.get(path`/v1/inference/batches/${batchID}`, options);
  }

  list(query: BatchListParams, options?: RequestOptions): APIPromise<BatchListResponse> {
    return this._client.get('/v1/inference/batches', { query, ...options });
  }

  cancel(batchID: string, options?: RequestOptions): APIPromise<Batch> {
    return this._client.post(path`/v1/inference/batches/${batchID}/cancel`, options);
  }
}

export interface Batch {
  id: string;

  account_id: string;

  completion_window: string;

  created_at: string;

  deadline_at: string;

  endpoint: string;

  input_file_uri: string;

  object: string;

  output_file_uri: string;

  price: Price;

  status:
    | 'Validating'
    | 'Failed'
    | 'InProgress'
    | 'Finalizing'
    | 'Completed'
    | 'Expired'
    | 'Cancelling'
    | 'Cancelled'
    | 'Waiting';

  cancelled_at?: string | null;

  cancelling_at?: string | null;

  completed_at?: string | null;

  error_file_id?: string | null;

  errors?: Batch.Errors | null;

  expired_at?: string | null;

  expires_at?: string | null;

  failed_at?: string | null;

  finalizing_at?: string | null;

  in_progress_at?: string | null;

  metadata?: BatchMetadata | null;

  output_file_id?: string | null;

  request_counts?: Batch.RequestCounts | null;
}

export namespace Batch {
  export interface Errors {
    data: Array<Errors.Data>;

    object: string;
  }

  export namespace Errors {
    export interface Data {
      code: string;

      message: string;

      line?: number | null;

      param?: string | null;
    }
  }

  export interface RequestCounts {
    completed: number;

    failed: number;

    total: number;
  }
}

export interface BatchMetadata {
  batch_description: string;

  customer_id: string;
}

export interface BatchRequest {
  completion_window: string;

  endpoint: string;

  input_file_uri: string;

  output_file_uri: string;

  price: Price;

  store: string;

  metadata?: BatchMetadata | null;
}

export interface Price {
  cents_per_million_input_tokens: number;

  cents_per_million_output_tokens: number;
}

export type BatchCreateResponse = Array<Batch>;

export type BatchListResponse = Array<Batch>;

export type BatchCreateParams = BatchCreateParams.BatchRequest | BatchCreateParams.Variant1;

export declare namespace BatchCreateParams {
  export interface BatchRequest {
    completion_window: string;

    endpoint: string;

    input_file_uri: string;

    output_file_uri: string;

    price: Price;

    store: string;

    metadata?: BatchMetadata | null;
  }

  export interface Variant1 {
    body: Array<BatchRequest>;
  }
}

export interface BatchListParams {
  /**
   * Pagination offset
   */
  after: number;

  /**
   * Max items to return
   */
  limit: number;
}

export declare namespace Batches {
  export {
    type Batch as Batch,
    type BatchMetadata as BatchMetadata,
    type BatchRequest as BatchRequest,
    type Price as Price,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchListResponse as BatchListResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };
}
