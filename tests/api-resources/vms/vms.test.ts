// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SFCNodes from '@sfc/nodes-sdk-alpha';

const client = new SFCNodes({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vms', () => {
  // skipped: tests are disabled for the time being
  test.skip('logs: only required params', async () => {
    const responsePromise = client.vms.logs({ instance_id: 'instance_id', order_by: 'seqnum_asc' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('logs: required and optional params', async () => {
    const response = await client.vms.logs({
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
  test.skip('ssh: only required params', async () => {
    const responsePromise = client.vms.ssh({ vm_id: 'vm_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('ssh: required and optional params', async () => {
    const response = await client.vms.ssh({ vm_id: 'vm_id' });
  });
});
