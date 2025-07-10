// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScriptAPI from './script';
import { Script, ScriptCreateParams, ScriptCreateResponse, ScriptRetrieveResponse, UserData } from './script';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Vms extends APIResource {
  script: ScriptAPI.Script = new ScriptAPI.Script(this._client);

  listInstances(options?: RequestOptions): APIPromise<VmListInstancesResponse> {
    return this._client.get('/v0/vms/instances', options);
  }

  replace(body: VmReplaceParams, options?: RequestOptions): APIPromise<VmReplaceResponse> {
    return this._client.post('/v0/vms/replace', { body, ...options });
  }

  retrieveLogs(
    query: VmRetrieveLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VmRetrieveLogsResponse> {
    return this._client.get('/v0/vms/logs', { query, ...options });
  }

  retrieveLogs2(query: VmRetrieveLogs2Params, options?: RequestOptions): APIPromise<VmRetrieveLogs2Response> {
    return this._client.get('/v0/vms/logs2', { query, ...options });
  }

  retrieveSSH(query: VmRetrieveSSHParams, options?: RequestOptions): APIPromise<VmRetrieveSSHResponse> {
    return this._client.get('/v0/vms/ssh', { query, ...options });
  }
}

export interface VmListInstancesResponse {
  data: Array<VmListInstancesResponse.Data>;
}

export namespace VmListInstancesResponse {
  export interface Data {
    id: string;

    cluster_id: string;

    current_status: string;

    instance_group_id: string;

    last_updated_at: string;
  }
}

export interface VmReplaceResponse {
  replaced: string;

  replaced_by: string;
}

export type VmRetrieveLogsResponse =
  | VmRetrieveLogsResponse.UnionMember0
  | VmRetrieveLogsResponse.UnionMember1;

export namespace VmRetrieveLogsResponse {
  export interface UnionMember0 {
    data: Array<UnionMember0.Data>;

    object: 'list';
  }

  export namespace UnionMember0 {
    export interface Data {
      instance_id: string;

      message: string;

      /**
       * ISO timestamp of the log line
       */
      timestamp: string;
    }
  }

  export interface UnionMember1 {
    data: Array<UnionMember1.Data>;

    has_more: boolean;

    object: 'list';
  }

  export namespace UnionMember1 {
    export interface Data {
      instance_id: string;

      message: string;

      /**
       * ISO timestamp of the log line
       */
      timestamp: string;
    }
  }
}

export interface VmRetrieveLogs2Response {
  data: Array<VmRetrieveLogs2Response.Data>;
}

export namespace VmRetrieveLogs2Response {
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

export interface VmRetrieveSSHResponse {
  ssh_hostname: string;

  ssh_port: number;

  ssh_host_keys?: Array<VmRetrieveSSHResponse.SSHHostKey> | null;
}

export namespace VmRetrieveSSHResponse {
  export interface SSHHostKey {
    base64_encoded_key: string;

    key_type: string;
  }
}

export interface VmReplaceParams {
  vm_id: string;
}

export interface VmRetrieveLogsParams {
  /**
   * ISO timestamp to get logs older than this time
   */
  before?: string;

  instance_id?: string;

  /**
   * Maximum number of logs to return
   */
  limit?: number;

  /**
   * ISO timestamp to get logs newer than this time
   */
  since?: string;
}

export interface VmRetrieveLogs2Params {
  instance_id: string;

  order_by: 'seqnum_asc' | 'seqnum_desc';

  before_realtime_timestamp?: string;

  before_seqnum?: number;

  limit?: number;

  since_realtime_timestamp?: string;

  since_seqnum?: number;
}

export interface VmRetrieveSSHParams {
  vm_id: string;
}

Vms.Script = Script;

export declare namespace Vms {
  export {
    type VmListInstancesResponse as VmListInstancesResponse,
    type VmReplaceResponse as VmReplaceResponse,
    type VmRetrieveLogsResponse as VmRetrieveLogsResponse,
    type VmRetrieveLogs2Response as VmRetrieveLogs2Response,
    type VmRetrieveSSHResponse as VmRetrieveSSHResponse,
    type VmReplaceParams as VmReplaceParams,
    type VmRetrieveLogsParams as VmRetrieveLogsParams,
    type VmRetrieveLogs2Params as VmRetrieveLogs2Params,
    type VmRetrieveSSHParams as VmRetrieveSSHParams,
  };

  export {
    Script as Script,
    type UserData as UserData,
    type ScriptCreateResponse as ScriptCreateResponse,
    type ScriptRetrieveResponse as ScriptRetrieveResponse,
    type ScriptCreateParams as ScriptCreateParams,
  };
}
