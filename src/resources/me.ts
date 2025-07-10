// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Me extends APIResource {
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/v0/me', options);
  }
}

export interface MeRetrieveResponse {
  id: string;

  can_buy: boolean;

  can_sell: boolean;

  object: 'account';

  role: 'admin' | 'user' | 'vendor' | 'clops' | 'sfcd';
}

export declare namespace Me {
  export { type MeRetrieveResponse as MeRetrieveResponse };
}
