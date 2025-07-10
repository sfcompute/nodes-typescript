// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScriptAPI from './script';
import { Script, ScriptCreateParams, ScriptCreateResponse, ScriptRetrieveResponse, UserData } from './script';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Vms extends APIResource {
  script: ScriptAPI.Script = new ScriptAPI.Script(this._client);

  list(options?: RequestOptions): APIPromise<VmListResponse> {
    return this._client.get('/v0/vms/instances', options);
  }

  logs(query: VmLogsParams, options?: RequestOptions): APIPromise<VmLogsResponse> {
    return this._client.get('/v0/vms/logs2', { query, ...options });
  }

  replace(body: VmReplaceParams, options?: RequestOptions): APIPromise<VmReplaceResponse> {
    return this._client.post('/v0/vms/replace', { body, ...options });
  }

  ssh(query: VmSSHParams, options?: RequestOptions): APIPromise<VmSSHResponse> {
    return this._client.get('/v0/vms/ssh', { query, ...options });
  }
}

export interface VmListResponse {
  data: Array<VmListResponse.Data>;
}

export namespace VmListResponse {
  export interface Data {
    id: string;

    cluster_id: string;

    current_status: string;

    instance_group_id: string;

    last_updated_at: string;
  }
}

export interface VmLogsResponse {
  data: Array<VmLogsResponse.Data>;
}

export namespace VmLogsResponse {
  export interface Data {
    data: Array<number>;

    instance_id: string;

    monotonic_timestamp_nano_sec: number;

    monotonic_timestamp_sec: number;

    /**
     * In RFC 3339 format
     */
    realtime_timestamp: string;

    seqnum: number;
  }
}

export interface VmReplaceResponse {
  replaced: string;

  replaced_by: string;
}

export interface VmSSHResponse {
  ssh_hostname: string;

  ssh_port: number;

  ssh_host_keys?: Array<VmSSHResponse.SSHHostKey> | null;
}

export namespace VmSSHResponse {
  export interface SSHHostKey {
    base64_encoded_key: string;

    key_type: string;
  }
}

export interface VmLogsParams {
  instance_id: string;

  order_by: 'seqnum_asc' | 'seqnum_desc';

  before_realtime_timestamp?: string;

  before_seqnum?: number;

  limit?: number;

  since_realtime_timestamp?: string;

  since_seqnum?: number;
}

export interface VmReplaceParams {
  vm_id: string;
}

export interface VmSSHParams {
  vm_id: string;
}

Vms.Script = Script;

export declare namespace Vms {
  export {
    type VmListResponse as VmListResponse,
    type VmLogsResponse as VmLogsResponse,
    type VmReplaceResponse as VmReplaceResponse,
    type VmSSHResponse as VmSSHResponse,
    type VmLogsParams as VmLogsParams,
    type VmReplaceParams as VmReplaceParams,
    type VmSSHParams as VmSSHParams,
  };

  export {
    Script as Script,
    type UserData as UserData,
    type ScriptCreateResponse as ScriptCreateResponse,
    type ScriptRetrieveResponse as ScriptRetrieveResponse,
    type ScriptCreateParams as ScriptCreateParams,
  };
}
