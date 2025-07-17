// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SFCNodes from 'sfc-nodes';

const client = new SFCNodes({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource nodes', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.nodes.create({ desired_count: 1, max_price_per_hour: 1000 });
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
    const response = await client.nodes.create({
      desired_count: 1,
      max_price_per_hour: 1000,
      end_at: 1640995200,
      names: ['string'],
      node_type: 'OnDemand',
      start_at: 1640995200,
      zone: 'zone',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.nodes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('extend: only required params', async () => {
    const responsePromise = client.nodes.extend('id', { duration_seconds: 7200, max_price_per_hour: 1000 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('extend: required and optional params', async () => {
    const response = await client.nodes.extend('id', { duration_seconds: 7200, max_price_per_hour: 1000 });
  });

  // skipped: tests are disabled for the time being
  test.skip('release: only required params', async () => {
    const responsePromise = client.nodes.release('id', { body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('release: required and optional params', async () => {
    const response = await client.nodes.release('id', { body: {} });
  });
});
