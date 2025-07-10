// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SfcNodes from 'sfc-nodes';

const client = new SfcNodes({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource vms', () => {
  // skipped: tests are disabled for the time being
  test.skip('listInstances', async () => {
    const responsePromise = client.vms.listInstances();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('replace: only required params', async () => {
    const responsePromise = client.vms.replace({ vm_id: 'vm_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('replace: required and optional params', async () => {
    const response = await client.vms.replace({ vm_id: 'vm_id' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLogs', async () => {
    const responsePromise = client.vms.retrieveLogs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLogs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vms.retrieveLogs(
        {
          before: '2023-01-01T00:00:00Z',
          instance_id: 'instance_id',
          limit: 1,
          since: '2023-01-01T00:00:00Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SfcNodes.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLogs2: only required params', async () => {
    const responsePromise = client.vms.retrieveLogs2({ instance_id: 'instance_id', order_by: 'seqnum_asc' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLogs2: required and optional params', async () => {
    const response = await client.vms.retrieveLogs2({
      instance_id: 'instance_id',
      order_by: 'seqnum_asc',
      before_realtime_timestamp: 'before_realtime_timestamp',
      before_seqnum: 0,
      limit: 1,
      since_realtime_timestamp: 'since_realtime_timestamp',
      since_seqnum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSSH: only required params', async () => {
    const responsePromise = client.vms.retrieveSSH({ vm_id: 'vm_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSSH: required and optional params', async () => {
    const response = await client.vms.retrieveSSH({ vm_id: 'vm_id' });
  });
});
