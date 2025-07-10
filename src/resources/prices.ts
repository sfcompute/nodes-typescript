// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Prices extends APIResource {
  /**
   * Get historical prices for a given instance type
   */
  list(
    query: PriceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PriceListResponse> {
    return this._client.get('/v0/prices', { query, ...options });
  }
}

export interface PriceListResponse {
  data: Array<PriceListResponse.UnionMember0 | PriceListResponse.UnionMember1>;

  has_more: boolean;

  object: 'list';
}

export namespace PriceListResponse {
  export interface UnionMember0 {
    gpu_hour: UnionMember0.GPUHour;

    no_data: false;

    object: 'price-history-item';

    /**
     * ISO 8601 datetime marking the end of the period.
     */
    period_end: string;

    /**
     * ISO 8601 datetime marking the start of the period.
     */
    period_start: string;
  }

  export namespace UnionMember0 {
    export interface GPUHour {
      /**
       * The average price per GPU hour for the period (in cents, 1 = $0.01).
       */
      avg: number;

      /**
       * The maximum price per GPU hour for the period (in cents, 1 = $0.01).
       */
      max: number;

      /**
       * The minimum price per GPU hour for the period (in cents, 1 = $0.01).
       */
      min: number;
    }
  }

  export interface UnionMember1 {
    no_data: true;

    object: 'price-history-item';

    /**
     * ISO 8601 datetime marking the end of the period.
     */
    period_end: string;

    /**
     * ISO 8601 datetime marking the start of the period.
     */
    period_start: string;
  }
}

export interface PriceListParams {
  /**
   * The instance type.
   */
  instance_type?: 'h100i' | 'h100v' | 'h200ki' | (string & {});

  /**
   * The maximum duration, in seconds, of filled blocks.
   */
  max_duration?: number | null;

  /**
   * The maximum quantity of nodes filled blocks included in the price calculation
   * contain.
   */
  max_quantity?: number;

  /**
   * The minimum duration, in seconds, of filled blocks.
   */
  min_duration?: number | null;

  /**
   * The minimum quantity of nodes filled blocks included in the price calculation
   * contain.
   */
  min_quantity?: number;

  /**
   * The number of days to go back, starting from today. If you provide 0, you will
   * only see prices for today. If you provide 1, you will see prices over all of
   * yesterday, and today.
   */
  since_n_days_ago?: number | null;
}

export declare namespace Prices {
  export { type PriceListResponse as PriceListResponse, type PriceListParams as PriceListParams };
}
