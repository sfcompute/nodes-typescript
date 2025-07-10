// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Account extends APIResource {
  /**
   * Retrieves detailed information about the currently authenticated account.
   *
   * This endpoint returns:
   *
   * - Account ID
   * - Account status and permissions (role, KYC level, frozen status)
   * - Account metadata (creation date, waitlist status)
   *
   * Use this endpoint to:
   *
   * - Display user profile information
   * - Check account permissions and limits
   * - Verify KYC status before performing restricted operations
   * - Determine feature availability based on account role
   */
  retrieveMe(options?: RequestOptions): APIPromise<AccountRetrieveMeResponse> {
    return this._client.get('/v1/account/me', options);
  }
}

/**
 * Response body for the account/me endpoint.
 */
export interface AccountRetrieveMeResponse {
  /**
   * The unique identifier for the account
   */
  id: string;

  /**
   * When the account was created as a epoch unix timestamp
   */
  created_at: number;

  /**
   * Whether the account is currently frozen
   */
  is_frozen: boolean;

  /**
   * The KYC (Know Your Customer) verification level
   */
  kyc: string;

  /**
   * Whether the KYC-B form has been submitted
   */
  kycb_form_submitted: boolean;

  /**
   * The role assigned to this account
   */
  role: string;

  /**
   * Whether the user has submitted the waitlist form
   */
  submitted_waitlist: boolean;

  /**
   * Whether the user is on the waitlist
   */
  waitlist: boolean;
}

export declare namespace Account {
  export { type AccountRetrieveMeResponse as AccountRetrieveMeResponse };
}
