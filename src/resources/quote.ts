// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Quote extends APIResource {
  retrieve(query: QuoteRetrieveParams, options?: RequestOptions): APIPromise<QuoteRetrieveResponse> {
    return this._client.get('/v0/quote', { query, ...options });
  }
}

export type QuoteRetrieveResponse = QuoteRetrieveResponse.UnionMember0 | QuoteRetrieveResponse.UnionMember1;

export namespace QuoteRetrieveResponse {
  export interface UnionMember0 {
    object: 'quote';

    quote: UnionMember0.Quote | null;

    side: 'buy';
  }

  export namespace UnionMember0 {
    export interface Quote {
      /**
       * The end time, as an ISO 8601 string. End times must be on the hour, i.e. 16:00,
       * 17:00, 18:00, etc. 17:30, 17:01, etc are not valid end times. Dates are always
       * rounded up to the nearest minute.
       */
      end_at: string;

      /**
       * The instance type.
       */
      instance_type: 'h100i' | 'h100v' | 'h200ki' | (string & {});

      /**
       * Price in cents (1 = $0.01)
       */
      price: number | null;

      /**
       * The number of nodes.
       */
      quantity: number;

      /**
       * The start time, as an ISO 8601 string. Start times must be either "right now" or
       * on the hour. Order start times must be in the future, and can be either the next
       * minute from now or on the hour. For example, if it's 16:00, valid start times
       * include 16:01, 17:00, and 18:00, but not 16:30. Dates are always rounded up to
       * the nearest minute.
       */
      start_at: string;
    }
  }

  export interface UnionMember1 {
    object: 'quote';

    quote: UnionMember1.Quote | null;

    side: 'sell';
  }

  export namespace UnionMember1 {
    export interface Quote {
      /**
       * An external ID with prefix and alphanumeric string with underscores
       */
      contract_id: string;

      /**
       * The end time, as an ISO 8601 string. End times must be on the hour, i.e. 16:00,
       * 17:00, 18:00, etc. 17:30, 17:01, etc are not valid end times. Dates are always
       * rounded up to the nearest minute.
       */
      end_at: string;

      /**
       * Price in cents (1 = $0.01)
       */
      price: number | null;

      /**
       * The number of nodes.
       */
      quantity: number;

      /**
       * The start time, as an ISO 8601 string. Start times must be either "right now" or
       * on the hour. Order start times must be in the future, and can be either the next
       * minute from now or on the hour. For example, if it's 16:00, valid start times
       * include 16:01, 17:00, and 18:00, but not 16:30. Dates are always rounded up to
       * the nearest minute.
       */
      start_at: string;
    }
  }
}

export interface QuoteRetrieveParams {
  /**
   * The number of nodes.
   */
  quantity: number;

  /**
   * Specific cluster the reservation should land on. If provided, the
   * `instance_type` will be ignored.
   */
  cluster?: string;

  /**
   * An external ID with prefix and alphanumeric string with underscores
   */
  colocate_with?: string | Array<string>;

  /**
   * An external ID with prefix and alphanumeric string with underscores
   */
  contract_id?: string;

  /**
   * desired duration, in seconds. Since contracts must end on the hour, the actual
   * duration returned by the quote may be longer than the requested duration by up
   * to 59 minutes. If `min_duration` and `max_duration` are provided, this value is
   * ignored. If this is not provided, `min_duration` and `max_duration` must be
   * provided.
   */
  duration?: number;

  /**
   * The instance type.
   */
  instance_type?: 'h100i' | 'h100v' | 'h200ki' | (string & {});

  /**
   * desired duration, in seconds. Since contracts must end on the hour, the actual
   * duration returned by the quote may be longer than the requested duration by up
   * to 59 minutes. If `min_duration` and `max_duration` are provided, this value is
   * ignored. If this is not provided, `min_duration` and `max_duration` must be
   * provided.
   */
  max_duration?: number;

  /**
   * Inclusive upper bound for the start time. Can either be the literal string "NOW"
   * or an ISO 8601 string. The query will consider all valid start times on or
   * before this time.
   */
  max_start_date?: 'NOW' | (string & {}) | (string & {}) | string;

  /**
   * desired duration, in seconds. Since contracts must end on the hour, the actual
   * duration returned by the quote may be longer than the requested duration by up
   * to 59 minutes. If `min_duration` and `max_duration` are provided, this value is
   * ignored. If this is not provided, `min_duration` and `max_duration` must be
   * provided.
   */
  min_duration?: number;

  /**
   * Inclusive lower bound for the start time. Can either be the literal string "NOW"
   * or an ISO 8601 string. The query will consider all valid start times at or after
   * this time.
   */
  min_start_date?: 'NOW' | (string & {}) | (string & {}) | string;

  side?: 'buy' | 'sell';
}

export declare namespace Quote {
  export {
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteRetrieveParams as QuoteRetrieveParams,
  };
}
