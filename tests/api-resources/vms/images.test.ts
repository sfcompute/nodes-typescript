// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SFCNodes from '@sfcompute/nodes-sdk-alpha';

const client = new SFCNodes({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.vms.images.list({ workspace: 'wksp_k3R-nX9vLm7Qp2Yw5Jd8F' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.vms.images.list({
      workspace: 'wksp_k3R-nX9vLm7Qp2Yw5Jd8F',
      id: ['image_k3R-nX9vLm7Qp2Yw5Jd8F'],
      ending_before: 'imagec_gqXR7s0Kj5mHvE2wNpLc4Q',
      limit: 1,
      starting_after: 'imagec_gqXR7s0Kj5mHvE2wNpLc4Q',
    });
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.vms.images.get('image_k3R-nX9vLm7Qp2Yw5Jd8F');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
