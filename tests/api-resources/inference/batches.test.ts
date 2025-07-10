// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SfcNodes from 'sfc-nodes';

const client = new SfcNodes({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource batches', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.inference.batches.create({
      completion_window: 'completion_window',
      endpoint: 'endpoint',
      input_file_uri: 'input_file_uri',
      output_file_uri: 'output_file_uri',
      price: { cents_per_million_input_tokens: 0, cents_per_million_output_tokens: 0 },
      store: 'store',
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
    const response = await client.inference.batches.create({
      completion_window: 'completion_window',
      endpoint: 'endpoint',
      input_file_uri: 'input_file_uri',
      output_file_uri: 'output_file_uri',
      price: { cents_per_million_input_tokens: 0, cents_per_million_output_tokens: 0 },
      store: 'store',
      metadata: { batch_description: 'batch_description', customer_id: 'customer_id' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.inference.batches.retrieve('batch_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.inference.batches.list({ after: 0, limit: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.inference.batches.list({ after: 0, limit: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('cancel', async () => {
    const responsePromise = client.inference.batches.cancel('batch_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
