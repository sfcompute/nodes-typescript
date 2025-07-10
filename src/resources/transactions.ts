// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransactionsAPI from './transactions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Transactions extends APIResource {
  /**
   * @example
   * ```ts
   * const transactions = await client.transactions.list();
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/v0/transactions', { query, ...options });
  }
}

/**
 * The kind of account involved in the transaction. Each user has one account of
 * each account kind. The account "primary" is the main one used for buy/sell on
 * the platform.
 */
export type AccountKind =
  | 'primary'
  | 'capital'
  | 'withdrawal_reserve'
  | 'fulfillment_escrow'
  | 'delivery_fee_escrow';

/**
 * List of transactions for an account
 */
export interface TransactionListResponse {
  /**
   * The type of the response object
   */
  object: 'transactions';

  /**
   * Pagination information
   */
  pagination: TransactionListResponse.Pagination;

  /**
   * Transactions for all accounts (see account kind) associated with this user.
   */
  transactions: Array<TransactionListResponse.Transaction>;
}

export namespace TransactionListResponse {
  /**
   * Pagination information
   */
  export interface Pagination {
    /**
     * Number of transactions returned
     */
    count: number;

    /**
     * Whether there are more transactions available
     */
    has_more: boolean;

    /**
     * Timestamp of the newest transaction returned, useful for pagination
     */
    newest_timestamp: string | null;

    /**
     * Timestamp of the oldest transaction returned, useful for pagination
     */
    oldest_timestamp: string | null;
  }

  /**
   * A transaction representing a movement of funds
   */
  export interface Transaction {
    /**
     * Unique identifier for the transaction
     */
    id: string;

    /**
     * The kind of account involved in the transaction. Each user has one account of
     * each account kind. The account "primary" is the main one used for buy/sell on
     * the platform.
     */
    account_kind: TransactionsAPI.AccountKind;

    /**
     * Transaction amount in cents
     */
    amount: number;

    /**
     * Account balance after transaction in cents
     */
    balance_after: number;

    /**
     * Account balance before transaction in cents
     */
    balance_before: number;

    /**
     * Whether the transaction is incoming to or outgoing from the account.
     */
    direction: 'incoming' | 'outgoing';

    /**
     * Additional transaction-specific details
     */
    metadata:
      | Transaction.UnionMember0
      | Transaction.UnionMember1
      | Transaction.Type
      | Transaction.UnionMember3
      | Transaction.UnionMember4
      | Transaction.UnionMember5
      | Transaction.UnionMember6
      | Transaction.UnionMember7
      | Transaction.Type
      | Transaction.Type
      | Transaction.Type
      | Transaction.Type;

    /**
     * The current status of a transaction.
     */
    status: 'accepted' | 'rejected';

    /**
     * When the money movement occurred within SFCs system
     */
    timestamp: string;
  }

  export namespace Transaction {
    /**
     * A buy order was filled
     */
    export interface UnionMember0 {
      /**
       * The buy orders requested end time of compute
       */
      end_time: string;

      /**
       * Requirements specified for the buy order
       */
      instance_type_requirements: UnionMember0.InstanceTypeRequirements;

      /**
       * An external ID with prefix and alphanumeric string with underscores
       */
      order_id: string;

      /**
       * Quantity requested in the buy order, in number of nodes (8 gpus)
       */
      quantity: number;

      /**
       * The buy orders requested start time of the compute
       */
      start_time: string;

      type: 'buy';
    }

    export namespace UnionMember0 {
      /**
       * Requirements specified for the buy order
       */
      export interface InstanceTypeRequirements {
        /**
         * Delivery method.
         */
        delivery_type: 'K8s' | 'VM';

        /**
         * List of allowed accelerator types.
         */
        accelerator_types?: Array<'H100' | 'H200'>;

        /**
         * List of allowed interconnect types.
         */
        interconnect_types?: Array<'Infiniband' | 'None'>;

        /**
         * List of allowed regions.
         */
        regions?: Array<'NorthAmerica' | 'AsiaPacific' | 'EuropeMiddleEastAfrica'>;
      }
    }

    /**
     * A sell order was filled.
     */
    export interface UnionMember1 {
      /**
       * The backing contract that was sold from.
       */
      backing_contract_id: string;

      /**
       * The orders requested end time of compute to sell
       */
      end_time: string;

      /**
       * The sell order that was executed.
       */
      order_id: string;

      /**
       * Quantity that was requested to sell, In number of nodes (8 gpus)
       */
      quantity: number;

      /**
       * The orders requested start time of the compute to sell
       */
      start_time: string;

      type: 'sell';
    }

    /**
     * Transfer from another account within SFC - within or outside your organization.
     * If you don't recognize this, contact SFC.
     */
    export interface Type {
      type: 'transfer';
    }

    /**
     * Something went wrong when collecting information about the transaction - SFC is
     * automatically notified if this occurs, but if you need prompt answers contact
     * SFC.
     */
    export interface UnionMember3 {
      /**
       * Best effort type of the transaction without additional metadata, but may be
       * 'unknown'
       */
      inner_type: string;

      type: 'error';

      /**
       * message of what went wrong
       */
      message?: unknown;
    }

    /**
     * A card deposit landed.
     */
    export interface UnionMember4 {
      /**
       * Brand of card used for payment.
       */
      card_brand: string;

      /**
       * The funding type of the card.
       */
      card_funding: string;

      /**
       * The last 4 digits of the card that was used to perform the payment.
       */
      card_last4: string;

      /**
       * The time the bank involved marked marked this transaction as completed.
       */
      completed_at: string;

      type: 'instant_deposit';

      /**
       * URL for the receipt if available.
       */
      receipt_url?: string;
    }

    /**
     * A bank deposit landed.
     */
    export interface UnionMember5 {
      /**
       * A short description of the account.
       */
      account_description: string;

      /**
       * The last 4 digits of the bank account number.
       */
      bank_account_last4: string;

      /**
       * The date the bank withdrawal was cancelled, if it was cancelled.
       */
      date_cancelled: string | null;

      /**
       * The date the bank withdrawal was initiated.
       */
      date_initiated: string;

      /**
       * The date the bank withdrawal settled by the bank, if it was cancelled. This will
       * in most cases be close to the time SFC processed the transaction.
       */
      date_settled: string | null;

      type: 'deposit_ach';
    }

    /**
     * A bank withdrawal occured.
     */
    export interface UnionMember6 {
      /**
       * A short description of the account.
       */
      account_description: string;

      /**
       * The date this bank withdrawal was approved.
       */
      approved_at: string;

      /**
       * The last 4 digits of the bank account number.
       */
      bank_account_last4: string;

      type: 'withdrawal_bank';
    }

    /**
     * A refund was accepted.
     */
    export interface UnionMember7 {
      /**
       * End time of experienced downtime.
       */
      end_time: string;

      /**
       * The time at which SFC approved the refund.
       */
      issue_date: string;

      /**
       * In number of nodes (8 gpus) affected during this period.
       */
      quantity: number;

      /**
       * The index rate per GPU, in cents, used to calculate the refund amount.
       */
      refund_cents_per_gpu_hour: number;

      /**
       * Downtime report ID that resulted in this refund being issued.
       */
      report_id: string;

      /**
       * Start time of experienced downtime.
       */
      start_time: string;

      type: 'refund';
    }

    /**
     * An exchange of funds was performed by an administrator at SFC. If you don't
     * recognize the reason for this, contact SFC.
     */
    export interface Type {
      type: 'admin_ledger_transfer';
    }

    /**
     * Payout for compute sold over the prior month.
     */
    export interface Type {
      type: 'fulfillment_escrow_release';
    }

    /**
     * A promotional credit from SFC.
     */
    export interface Type {
      type: 'promotional_credit';
    }

    /**
     * only SFC accounts should ever collect these types of fees. If you are not part
     * of the SFC organization, please let us know.
     */
    export interface Type {
      type: 'delivery_fees_collected';
    }
  }
}

export interface TransactionListParams {
  /**
   * Filter transactions by one or more account kinds. Primary account most relevant
   * for most users. No filter shows all account kinds.
   */
  account_kind?: AccountKind | Array<AccountKind>;

  /**
   * Return transactions before this timestamp (exclusive)
   */
  ending_before?: string;

  /**
   * Maximum number of transactions to return (default: 50, max: 500)
   */
  limit?: string;

  /**
   * Return transactions after this timestamp (exclusive)
   */
  starting_after?: string;

  /**
   * Filter transactions by one or more transaction types. No filter shows all
   * transaction categories.
   */
  transaction_type?:
    | 'buy'
    | 'sell'
    | 'transfer'
    | 'error'
    | 'instant_deposit'
    | 'deposit_ach'
    | 'withdrawal_bank'
    | 'refund'
    | 'admin_ledger_transfer'
    | 'fulfillment_escrow_release'
    | 'promotional_credit'
    | 'delivery_fees_collected'
    | Array<
        | 'buy'
        | 'sell'
        | 'transfer'
        | 'error'
        | 'instant_deposit'
        | 'deposit_ach'
        | 'withdrawal_bank'
        | 'refund'
        | 'admin_ledger_transfer'
        | 'fulfillment_escrow_release'
        | 'promotional_credit'
        | 'delivery_fees_collected'
      >;
}

export declare namespace Transactions {
  export {
    type AccountKind as AccountKind,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };
}
