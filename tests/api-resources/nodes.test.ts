// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SFCNodes from '@sfcompute/nodes-sdk-alpha';

const client = new SFCNodes({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource nodes', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.nodes.create({ desired_count: 1, max_price_per_node_hour: 1000 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.nodes.create({
      desired_count: 1,
      max_price_per_node_hour: 1000,
      any_zone: false,
      cloud_init_user_data: 'aGVsbG8gd29ybGQ=',
      end_at: 0,
      image_id: 'vmi_1234567890abcdef',
      names: ['cuda-crunch'],
      node_type: 'autoreserved',
      start_at: 1640995200,
      zone: 'hayesvalley',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.nodes.list(
        {
          id: ['string'],
          name: ['string'],
          type: 'autoreserved',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SFCNodes.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.nodes.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('extend: only required params', async () => {
    const responsePromise = client.nodes.extend('id', {
      duration_seconds: 7200,
      max_price_per_node_hour: 1000,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('extend: required and optional params', async () => {
    const response = await client.nodes.extend('id', {
      duration_seconds: 7200,
      max_price_per_node_hour: 1000,
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.nodes.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('redeploy', async () => {
    const responsePromise = client.nodes.redeploy('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('release', async () => {
    const responsePromise = client.nodes.release('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
