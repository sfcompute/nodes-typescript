// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Procurements extends APIResource {
  create(body: ProcurementCreateParams, options?: RequestOptions): APIPromise<Procurement> {
    return this._client.post('/v0/procurements', { body, ...options });
  }

  retrieve(id: string, options?: RequestOptions): APIPromise<Procurement> {
    return this._client.get(path`/v0/procurements/${id}`, options);
  }

  update(
    id: string,
    body: ProcurementUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Procurement> {
    return this._client.patch(path`/v0/procurements/${id}`, { body, ...options });
  }

  list(options?: RequestOptions): APIPromise<ProcurementListResponse> {
    return this._client.get('/v0/procurements', options);
  }
}

/**
 * In this strategy, the procurement will buy compute on any cluster, with no
 * guarantees about colocation whatsoever.
 */
export interface AnywhereColocationStrategy {
  type: 'anywhere';
}

/**
 * In this strategy, the procurement will guarantee that all compute it buys is
 * colocated in the same cluster, but not any specific cluster. If you scale the
 * procurement down to 0, and then scale back up, the procurement is not guaranteed
 * to land on the same cluster it was on before.
 */
export interface ColocateColocationStrategy {
  type: 'colocate';
}

/**
 * In this strategy, the procurement will guarantee that all compute it buys is
 * colocated in the same cluster, but not any specific cluster. However, once the
 * first reservation begins, the procurement will always land on that specific
 * cluster, even if you scale down to 0 and back up again.
 */
export interface ColocatePinnedColocationStrategy {
  type: 'colocate-pinned';
}

/**
 * In this strategy, the procurement will always buy compute on the given cluster.
 */
export interface PinnedColocationStrategy {
  cluster_name: string;

  type: 'pinned';
}

export interface Procurement {
  id: string;

  /**
   * In this strategy, the procurement will buy compute on any cluster, with no
   * guarantees about colocation whatsoever.
   */
  colocation_strategy:
    | AnywhereColocationStrategy
    | ColocateColocationStrategy
    | ColocatePinnedColocationStrategy
    | PinnedColocationStrategy;

  /**
   * The desired number of nodes the procurement will buy or sell
   */
  desired_quantity: number;

  /**
   * The instance type.
   */
  instance_type: 'h100i' | 'h100v' | 'h200ki' | (string & {});

  object: 'procurement';

  /**
   * The status of the procurement. If `disabled`, the procurement will not buy or
   * sell compute.
   */
  status: 'active' | 'disabled';

  /**
   * The maximum price, in cents per GPU per hour that the procurement will buy at
   * when extending or scaling up. If the market price goes higher than this, the
   * procurement will not buy compute. Note that this is a _maximum_ - the
   * procurement will always try to buy at the lowest price available.
   */
  buy_limit_price_per_gpu_hour?: number;

  /**
   * The minimum amount of time, in minutes, that the procurement should reserve
   * up-front at any point in time. The procurement will buy more compute if the
   * remaining time is less than this threshold.
   */
  horizon?: number;

  /**
   * The minimum price, in cents per GPU per hour that the procurement will sell at
   * when scaling down. If the market price dips below this price, the procurement
   * will not sell compute when scaling down.
   */
  sell_limit_price_per_gpu_hour?: number;
}

export interface ProcurementListResponse {
  data: Array<Procurement>;

  has_more: boolean;

  object: 'list';
}

export interface ProcurementCreateParams {
  desired_quantity: number;

  /**
   * The instance type.
   */
  instance_type: 'h100i' | 'h100v' | 'h200ki' | (string & {});

  buy_limit_price_per_gpu_hour?: number;

  /**
   * In this strategy, the procurement will buy compute on any cluster, with no
   * guarantees about colocation whatsoever.
   */
  colocation_strategy?:
    | AnywhereColocationStrategy
    | ColocateColocationStrategy
    | ColocatePinnedColocationStrategy
    | PinnedColocationStrategy;

  horizon?: number;

  sell_limit_price_per_gpu_hour?: number;

  /**
   * The status of the procurement. If `disabled`, the procurement will not buy or
   * sell compute.
   */
  status?: 'active' | 'disabled';
}

export interface ProcurementUpdateParams {
  buy_limit_price_per_gpu_hour?: number;

  desired_quantity?: number;

  horizon?: number;

  /**
   * The instance type.
   */
  instance_type?: 'h100i' | 'h100v' | 'h200ki' | (string & {});

  sell_limit_price_per_gpu_hour?: number;

  /**
   * The status of the procurement. If `disabled`, the procurement will not buy or
   * sell compute.
   */
  status?: 'active' | 'disabled';
}

export declare namespace Procurements {
  export {
    type AnywhereColocationStrategy as AnywhereColocationStrategy,
    type ColocateColocationStrategy as ColocateColocationStrategy,
    type ColocatePinnedColocationStrategy as ColocatePinnedColocationStrategy,
    type PinnedColocationStrategy as PinnedColocationStrategy,
    type Procurement as Procurement,
    type ProcurementListResponse as ProcurementListResponse,
    type ProcurementCreateParams as ProcurementCreateParams,
    type ProcurementUpdateParams as ProcurementUpdateParams,
  };
}
