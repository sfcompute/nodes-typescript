// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SfcNodes from 'sfc-nodes';

const client = new SfcNodes({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource credits', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.credits.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('migrate: only required params', async () => {
    const responsePromise = client.credits.migrate({
      column_counterparty_id: 'cpty_2n4f8bxg3qj5p6r7s9t1v',
      type: 'withdraw',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('migrate: required and optional params', async () => {
    const response = await client.credits.migrate({
      column_counterparty_id: 'cpty_2n4f8bxg3qj5p6r7s9t1v',
      type: 'withdraw',
    });
  });
});
