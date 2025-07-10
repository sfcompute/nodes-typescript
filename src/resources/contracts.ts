// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Contracts extends APIResource {
  retrieve(id: string, options?: RequestOptions): APIPromise<ContractRetrieveResponse> {
    return this._client.get(path`/v0/contracts/${id}`, options);
  }

  list(
    query: ContractListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContractListResponse> {
    return this._client.get('/v0/contracts', { query, ...options });
  }
}

export interface ActiveContract {
  /**
   * An external ID with prefix and alphanumeric string with underscores
   */
  id: string;

  created_at: string;

  /**
   * The instance type.
   */
  instance_type: 'h100i' | 'h100v' | 'h200ki' | (string & {});

  object: 'contract';

  /**
   * A shape that describes the distribution of the contract's size over time.
   */
  shape: ActiveContract.Shape;

  state: 'Upcoming' | 'Expired' | 'Active';

  status: 'active';

  /**
   * An external ID with prefix and alphanumeric string with underscores
   */
  cluster_id?: string;

  colocate_with?: Array<string>;
}

export namespace ActiveContract {
  /**
   * A shape that describes the distribution of the contract's size over time.
   */
  export interface Shape {
    intervals: Array<(string & {}) | (string & {}) | string>;

    quantities: Array<number>;
  }
}

export interface PendingContract {
  /**
   * An external ID with prefix and alphanumeric string with underscores
   */
  id: string;

  object: 'contract';

  status: 'pending';
}

export type ContractRetrieveResponse = ActiveContract | PendingContract;

export interface ContractListResponse {
  data: Array<ActiveContract | PendingContract>;

  has_more: boolean;

  object: 'list';
}

export interface ContractListParams {
  active_within_interval_end?: string;

  active_within_interval_start?: string;

  instance_type?: string;

  state?: 'All' | 'Upcoming' | 'Expired' | 'Active';
}

export declare namespace Contracts {
  export {
    type ActiveContract as ActiveContract,
    type PendingContract as PendingContract,
    type ContractRetrieveResponse as ContractRetrieveResponse,
    type ContractListResponse as ContractListResponse,
    type ContractListParams as ContractListParams,
  };
}
