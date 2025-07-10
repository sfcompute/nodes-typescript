// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SFCNodes } from '../client';

export abstract class APIResource {
  protected _client: SFCNodes;

  constructor(client: SFCNodes) {
    this._client = client;
  }
}
