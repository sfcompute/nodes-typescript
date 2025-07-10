// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SfcNodes from 'sfc-nodes';

const client = new SfcNodes({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource prices', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.prices.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.prices.list(
        {
          instance_type: 'h100i',
          max_duration: 0,
          max_quantity: 1,
          min_duration: 0,
          min_quantity: 1,
          since_n_days_ago: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SfcNodes.NotFoundError);
  });
});
