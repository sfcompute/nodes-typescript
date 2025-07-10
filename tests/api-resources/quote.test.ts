// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SfcNodes from 'sfc-nodes';

const client = new SfcNodes({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource quote', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.quote.retrieve({ quantity: 3 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.quote.retrieve({
      quantity: 3,
      cluster: 'alamo',
      colocate_with: 'string',
      contract_id: 'contract_id',
      duration: 1,
      instance_type: 'h100i',
      max_duration: 1,
      max_start_date: 'NOW',
      min_duration: 1,
      min_start_date: 'NOW',
      side: 'buy',
    });
  });
});
