// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Credits extends APIResource {
  /**
   * Retrieves the current credit balance for the authenticated user's account.
   *
   * This endpoint returns:
   *
   * - The current balance in cents
   * - The available prepaid credits in cents
   * - The amount due for the next billing period in cents
   *
   * @example
   * ```ts
   * const credit = await client.credits.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<CreditRetrieveResponse> {
    return this._client.get('/v1/credits', options);
  }

  /**
   * Migrates your account from the legacy billing system to the new credit-based
   * billing system.
   *
   * This endpoint supports two migration options:
   *
   * - **Withdraw**: Transfer your account balance to an external bank account
   * - **Convert to Credits**: Convert your existing balance to credits for use in
   *   the new system
   *
   * The migration process will:
   *
   * - Check your current account balance
   * - Verify that your account is eligible for automatic migration
   * - Process the migration according to your chosen option
   *
   * **Note**: Some accounts with complex balance states may require manual migration
   * assistance. In such cases, the response will indicate
   * `requires_manual_migration` and our support team will help you complete the
   * process.
   *
   * @example
   * ```ts
   * const response = await client.credits.migrate({
   *   column_counterparty_id: 'cpty_2n4f8bxg3qj5p6r7s9t1v',
   *   type: 'withdraw',
   * });
   * ```
   */
  migrate(body: CreditMigrateParams, options?: RequestOptions): APIPromise<CreditMigrateResponse> {
    return this._client.post('/v1/credits/migrate', { body, ...options });
  }
}

/**
 * TODO rename route to "balance"? Response body for getting account credits.
 */
export interface CreditRetrieveResponse {
  /**
   * The amount due for the next billing period in cents (positive means customer
   * owes, 0 or negative means no payment due)
   */
  amount_due_next_billing_period_cents: number;

  /**
   * The available prepaid credits in cents (always positive)
   */
  available_credits_cents: number;

  /**
   * The current balance in cents (from customer account)
   */
  current_balance_cents: number;
}

/**
 * Response body for account migration requests.
 */
export type CreditMigrateResponse = 'migrated' | 'requires_manual_migration';

export type CreditMigrateParams = CreditMigrateParams.Withdraw | CreditMigrateParams.ConvertToCredits;

export declare namespace CreditMigrateParams {
  export interface Withdraw {
    /**
     * The identifier for your external bank account where funds will be transferred
     */
    column_counterparty_id: string;

    type: 'withdraw';
  }

  export interface ConvertToCredits {
    type: 'convert_to_credits';
  }
}

export declare namespace Credits {
  export {
    type CreditRetrieveResponse as CreditRetrieveResponse,
    type CreditMigrateResponse as CreditMigrateResponse,
    type CreditMigrateParams as CreditMigrateParams,
  };
}
