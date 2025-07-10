// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SfcNodes } from '../client';

export abstract class APIResource {
  protected _client: SfcNodes;

  constructor(client: SfcNodes) {
    this._client = client;
  }
}
