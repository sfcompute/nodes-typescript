// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ContractsAPI from './contracts';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Create a new order
   *
   * @example
   * ```ts
   * const order = await client.orders.create({
   *   end_at: '2025-07-09T05:09:39.815Z',
   *   instance_type: 'h100i',
   *   price: 136800,
   *   quantity: 3,
   *   side: 'buy',
   *   start_at: '2025-07-09T05:09:39.815Z',
   * });
   * ```
   */
  create(params: OrderCreateParams, options?: RequestOptions): APIPromise<OrderCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/v0/orders', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get order details
   *
   * @example
   * ```ts
   * const orderResponse = await client.orders.retrieve(
   *   'ordr_123',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OrderResponse> {
    return this._client.get(path`/v0/orders/${id}`, options);
  }

  /**
   * List orders
   *
   * @example
   * ```ts
   * const orders = await client.orders.list();
   * ```
   */
  list(
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListResponse> {
    return this._client.get('/v0/orders', { query, ...options });
  }

  /**
   * Cancel an order
   *
   * @example
   * ```ts
   * const response = await client.orders.cancel('ordr_123');
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<OrderCancelResponse> {
    return this._client.delete(path`/v0/orders/${id}`, options);
  }

  /**
   * Cancel all orders
   *
   * @example
   * ```ts
   * const response = await client.orders.cancelAll();
   * ```
   */
  cancelAll(options?: RequestOptions): APIPromise<OrderCancelAllResponse> {
    return this._client.delete('/v0/orders', options);
  }

  /**
   * Get all clusters associated with an order through contracts
   *
   * @example
   * ```ts
   * const response = await client.orders.getClusters(
   *   'ordr_123',
   * );
   * ```
   */
  getClusters(id: string, options?: RequestOptions): APIPromise<OrderGetClustersResponse> {
    return this._client.get(path`/v0/orders/${id}/clusters`, options);
  }
}

export interface OrderResponse {
  /**
   * An external ID with prefix and alphanumeric string with underscores
   */
  id: string;

  cancelled: boolean;

  created_at: string;

  /**
   * The end time, as an ISO 8601 string. End times must be on the hour, i.e. 16:00,
   * 17:00, 18:00, etc. 17:30, 17:01, etc are not valid end times. Dates are always
   * rounded up to the nearest minute.
   */
  end_at: string;

  executed: boolean;

  flags: OrderResponse.Flags;

  /**
   * The instance type.
   */
  instance_type: 'h100i' | 'h100v' | 'h200ki' | (string & {});

  object: 'order';

  /**
   * Price in cents (1 = $0.01)
   */
  price: number | null;

  /**
   * The number of nodes.
   */
  quantity: number;

  rejected: boolean;

  /**
   * Side of the order (buy/sell)
   */
  side: 'buy' | 'sell';

  /**
   * The start time, as an ISO 8601 string. Start times must be either "right now" or
   * on the hour. Order start times must be in the future, and can be either the next
   * minute from now or on the hour. For example, if it's 16:00, valid start times
   * include 16:01, 17:00, and 18:00, but not 16:30. Dates are always rounded up to
   * the nearest minute.
   */
  start_at: string;

  /**
   * Current status of the order
   */
  status: 'pending' | 'rejected' | 'open' | 'cancelled' | 'filled' | 'expired' | 'partially_filled';

  cancelled_at?: string;

  cluster?: string;

  colocate_with?: Array<string>;

  executed_at?: string;

  /**
   * Execution price in cents (1 = $0.01)
   */
  execution_price?: number | null;

  /**
   * Client-provided idempotency key to prevent duplicate requests. Calls to an
   * endpoint with the same idempotency key will only execute the operation once, and
   * return the same information on subsequent calls.
   */
  idempotency_key?: string;

  rejected_reason?: string;
}

export namespace OrderResponse {
  export interface Flags {
    /**
     * If true, this is an immediate-or-cancel order.
     */
    ioc?: boolean;

    /**
     * If true, this will be a market order.
     */
    market?: boolean;

    /**
     * If true, this is a post-only order.
     */
    post_only?: boolean;
  }
}

export interface OrderCreateResponse {
  /**
   * An external ID with prefix and alphanumeric string with underscores
   */
  id: string;

  object: 'order';

  status: 'pending';

  /**
   * Client-provided idempotency key to prevent duplicate requests. Calls to an
   * endpoint with the same idempotency key will only execute the operation once, and
   * return the same information on subsequent calls.
   */
  idempotency_key?: string;
}

export interface OrderListResponse {
  data: Array<OrderResponse>;

  has_more: boolean;

  object: 'list';
}

export interface OrderCancelResponse {
  object: 'pending';
}

export interface OrderCancelAllResponse {
  object: 'pending';
}

export interface OrderGetClustersResponse {
  data: Array<OrderGetClustersResponse.Data>;

  has_more: boolean;

  object: 'list';
}

export namespace OrderGetClustersResponse {
  export interface Data {
    kubernetes_api_url: string;

    kubernetes_ca_cert: string;

    kubernetes_namespace: string;

    name: string;

    object: 'kubernetes_cluster';

    contract?: ContractsAPI.ActiveContract | ContractsAPI.PendingContract;
  }
}

export type OrderCreateParams = OrderCreateParams.Variant0 | OrderCreateParams.Variant1;

export declare namespace OrderCreateParams {
  export interface Variant0 {
    /**
     * Body param: The end time, as an ISO 8601 string. End times must be on the hour,
     * i.e. 16:00, 17:00, 18:00, etc. 17:30, 17:01, etc are not valid end times. Dates
     * are always rounded up to the nearest minute.
     */
    end_at: string;

    /**
     * Body param: The instance type.
     */
    instance_type: 'h100i' | 'h100v' | 'h200ki' | (string & {});

    /**
     * Body param: Price in cents (1 = $0.01)
     */
    price: number | null;

    /**
     * Body param: The number of nodes.
     */
    quantity: number;

    /**
     * Body param:
     */
    side: 'buy';

    /**
     * Body param: The start time, as an ISO 8601 string. Start times must be either
     * "right now" or on the hour. Order start times must be in the future, and can be
     * either the next minute from now or on the hour. For example, if it's 16:00,
     * valid start times include 16:01, 17:00, and 18:00, but not 16:30. Dates are
     * always rounded up to the nearest minute.
     */
    start_at: (string & {}) | 'NOW';

    /**
     * Body param: Specific cluster the reservation should land on. If provided, the
     * `instance_type` will be ignored.
     */
    cluster?: string;

    /**
     * Body param:
     */
    colocate_with?: Array<string>;

    /**
     * Body param:
     */
    flags?: Variant0.Flags;

    /**
     * Header param: Client-provided idempotency key to prevent duplicate requests.
     * Calls to an endpoint with the same idempotency key will only execute the
     * operation once, and return the same information on subsequent calls.
     */
    'Idempotency-Key'?: string;
  }

  export namespace Variant0 {
    export interface Flags {
      /**
       * If true, this is an immediate-or-cancel order.
       */
      ioc?: boolean;

      /**
       * If true, this will be a market order.
       */
      market?: boolean;

      /**
       * If true, this is a post-only order.
       */
      post_only?: boolean;
    }
  }

  export interface Variant1 {
    /**
     * Body param: An external ID with prefix and alphanumeric string with underscores
     */
    contract_id: string;

    /**
     * Body param: The end time, as an ISO 8601 string. End times must be on the hour,
     * i.e. 16:00, 17:00, 18:00, etc. 17:30, 17:01, etc are not valid end times. Dates
     * are always rounded up to the nearest minute.
     */
    end_at: string;

    /**
     * Body param: Price in cents (1 = $0.01)
     */
    price: number | null;

    /**
     * Body param: The number of nodes.
     */
    quantity: number;

    /**
     * Body param:
     */
    side: 'sell';

    /**
     * Body param: The start time, as an ISO 8601 string. Start times must be either
     * "right now" or on the hour. Order start times must be in the future, and can be
     * either the next minute from now or on the hour. For example, if it's 16:00,
     * valid start times include 16:01, 17:00, and 18:00, but not 16:30. Dates are
     * always rounded up to the nearest minute.
     */
    start_at: (string & {}) | 'NOW';

    /**
     * Body param:
     */
    flags?: Variant1.Flags;

    /**
     * Body param:
     */
    reprice?: Variant1.UnionMember0 | Variant1.UnionMember1;

    /**
     * Header param: Client-provided idempotency key to prevent duplicate requests.
     * Calls to an endpoint with the same idempotency key will only execute the
     * operation once, and return the same information on subsequent calls.
     */
    'Idempotency-Key'?: string;
  }

  export namespace Variant1 {
    export interface Flags {
      /**
       * If true, this is an immediate-or-cancel order.
       */
      ioc?: boolean;

      /**
       * If true, this will be a market order.
       */
      market?: boolean;

      /**
       * If true, this is a post-only order.
       */
      post_only?: boolean;
    }

    export interface UnionMember0 {
      /**
       * For sell orders, the floor (lowest) price the order can be adjusted to, in
       * cents. For buy orders, the ceiling (highest) price the order can be adjusted to.
       */
      limit: number;

      /**
       * Adjust this order's price linearly from adjustment start to end. This is
       * deprecated, and will soon be unsupported. Please use `linear_v2` instead.
       */
      strategy: 'linear';

      /**
       * When to stop adjusting the order's price. If this date is past the order's end
       * time, it will be clamped such that the adjustment ends at the order's end time.
       */
      end_at?: string;

      /**
       * When to start adjusting the order's price. If this date is in the past, it will
       * be clamped such that the adjustment starts immediately.
       */
      start_at?: string;
    }

    export interface UnionMember1 {
      /**
       * The desired order limit price at the end of the repricing window, in cents.
       */
      end_price: number;

      /**
       * The desired order limit price at the beginning of the repricing window, in
       * cents.
       */
      start_price: number;

      /**
       * Adjust this order's price linearly across a given window of time.
       */
      strategy: 'linear_v2';

      /**
       * The end time of the repricing window. If this date is past the order's start
       * time, it will be clamped such that the repricing window ends at the order's
       * start time.
       */
      window_end: string;

      /**
       * The start time of the repricing window. Must be at or before the window end
       * time. If this date is in the past, it will be clamped such that window starts
       * immediately.
       */
      window_start: string;
    }
  }
}

export interface OrderListParams {
  contract_id?: string;

  exclude_cancelled?: boolean | null;

  exclude_filled?: boolean | null;

  /**
   * The instance type.
   */
  instance_type?: 'h100i' | 'h100v' | 'h200ki' | (string & {});

  limit?: number | null;

  max_cancelled_at?: string | null;

  max_duration?: number | null;

  max_fill_price?: number | null;

  max_filled_at?: string | null;

  max_placed_at?: string | null;

  max_price?: number | null;

  max_quantity?: number | null;

  max_start_date?: (string & {}) | (string & {});

  min_cancelled_at?: string | null;

  min_duration?: number | null;

  min_fill_price?: number | null;

  min_filled_at?: string | null;

  min_placed_at?: string | null;

  min_price?: number | null;

  min_quantity?: number | null;

  min_start_date?: (string & {}) | (string & {});

  offset?: number | null;

  only_cancelled?: boolean | null;

  only_filled?: boolean | null;

  only_open?: boolean | null;

  /**
   * Side of the order (buy/sell)
   */
  side?: 'buy' | 'sell';

  sort_by?: 'created_at' | 'start_time';

  sort_direction?: 'ASC' | 'DESC';
}

export declare namespace Orders {
  export {
    type OrderResponse as OrderResponse,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderListResponse as OrderListResponse,
    type OrderCancelResponse as OrderCancelResponse,
    type OrderCancelAllResponse as OrderCancelAllResponse,
    type OrderGetClustersResponse as OrderGetClustersResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderListParams as OrderListParams,
  };
}
