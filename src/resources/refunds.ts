// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Refunds extends APIResource {
  /**
   * @example
   * ```ts
   * const refunds = await client.refunds.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<RefundListResponse> {
    return this._client.get('/v0/refunds', options);
  }
}

/**
 * List of refund requests for an account
 */
export interface RefundListResponse {
  /**
   * The type of the response object
   */
  object: 'refunds';

  refunds: Array<RefundListResponse.Refund>;
}

export namespace RefundListResponse {
  /**
   * A refund request for downtime compensation
   */
  export interface Refund {
    /**
     * Amount of the credit memo in dollars, if approved
     */
    memo_amount: string | null;

    /**
     * When the refund was processed, if completed
     */
    refund_timestamp: string | null;

    /**
     * Identifier of the affected cluster
     */
    report_cluster_id: string;

    /**
     * When the downtime report was created
     */
    report_created_at: string;

    /**
     * End time of the downtime period
     */
    report_end_time: string;

    /**
     * Unique identifier of the downtime report
     */
    report_id: number;

    /**
     * Description of the downtime incident
     */
    report_memo: string;

    /**
     * Number of nodes affected by the downtime
     */
    report_nodes_affected: number;

    /**
     * Start time of the downtime period
     */
    report_start_time: string;

    /**
     * The current status of a refund request
     */
    status: 'in_review' | 'approved' | 'refunded' | 'denied';
  }
}

export declare namespace Refunds {
  export { type RefundListResponse as RefundListResponse };
}
