// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SFCNodes from '@sfcompute/nodes-sdk-alpha';

const client = new SFCNodes({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.vms.images.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vms.images.list(
        {
          id: ['image_k3R-nX9vLm7Qp2Yw5Jd8F'],
          ending_before: 'imagec_gqXR7s0Kj5mHvE2wNpLc4Q',
          limit: 1,
          starting_after: 'imagec_gqXR7s0Kj5mHvE2wNpLc4Q',
          workspace: 'wksp_k3R-nX9vLm7Qp2Yw5Jd8F',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SFCNodes.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.vms.images.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
