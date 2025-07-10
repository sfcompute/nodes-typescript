// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Balance extends APIResource {
  retrieve(options?: RequestOptions): APIPromise<BalanceRetrieveResponse> {
    return this._client.get('/v0/balance', options);
  }
}

export interface BalanceRetrieveResponse {
  available: BalanceRetrieveResponse.Available;

  object: 'balance';

  reserved: BalanceRetrieveResponse.Reserved;
}

export namespace BalanceRetrieveResponse {
  export interface Available {
    /**
     * Funds available to spend or withdraw.
     */
    amount: number;

    currency: 'usd';
  }

  export interface Reserved {
    /**
     * Funds held in reserve for pending withdrawals & open buy orders.
     */
    amount: number;

    currency: 'usd';
  }
}

export declare namespace Balance {
  export { type BalanceRetrieveResponse as BalanceRetrieveResponse };
}
