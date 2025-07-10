// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SfcNodes from 'sfc-nodes';

const client = new SfcNodes({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource orders', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.orders.create({
      end_at: '2025-07-09T05:09:39.815Z',
      instance_type: 'h100i',
      price: 136800,
      quantity: 3,
      side: 'buy',
      start_at: '2025-07-09T05:09:39.815Z',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.orders.create({
      end_at: '2025-07-09T05:09:39.815Z',
      instance_type: 'h100i',
      price: 136800,
      quantity: 3,
      side: 'buy',
      start_at: '2025-07-09T05:09:39.815Z',
      cluster: 'alamo',
      colocate_with: ['string'],
      flags: { ioc: true, market: true, post_only: true },
      'Idempotency-Key': 'IDEMP_KEY_0',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.orders.retrieve('ordr_123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.orders.list();
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
      client.orders.list(
        {
          contract_id: 'contract_id',
          exclude_cancelled: true,
          exclude_filled: true,
          instance_type: 'h100i',
          limit: 0,
          max_cancelled_at: 'max_cancelled_at',
          max_duration: 0,
          max_fill_price: 0,
          max_filled_at: 'max_filled_at',
          max_placed_at: 'max_placed_at',
          max_price: 0,
          max_quantity: 0,
          max_start_date: '2019-12-27',
          min_cancelled_at: 'min_cancelled_at',
          min_duration: 0,
          min_fill_price: 0,
          min_filled_at: 'min_filled_at',
          min_placed_at: 'min_placed_at',
          min_price: 0,
          min_quantity: 0,
          min_start_date: '2019-12-27',
          offset: 0,
          only_cancelled: true,
          only_filled: true,
          only_open: true,
          side: 'buy',
          sort_by: 'created_at',
          sort_direction: 'ASC',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SfcNodes.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('cancel', async () => {
    const responsePromise = client.orders.cancel('ordr_123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('cancelAll', async () => {
    const responsePromise = client.orders.cancelAll();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getClusters', async () => {
    const responsePromise = client.orders.getClusters('ordr_123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
