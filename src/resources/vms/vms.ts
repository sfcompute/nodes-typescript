// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ImagesAPI from './images';
import { ImageGetResponse, ImageListResponse, Images } from './images';
import * as ScriptAPI from './script';
import { Script, ScriptCreateParams, ScriptCreateResponse, ScriptRetrieveResponse, UserData } from './script';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class VMs extends APIResource {
  script: ScriptAPI.Script = new ScriptAPI.Script(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);

  logs(query: VMLogsParams, options?: RequestOptions): APIPromise<VMLogsResponse> {
    return this._client.get('/v0/vms/logs2', { query, ...options });
  }

  ssh(query: VMSSHParams, options?: RequestOptions): APIPromise<VMSSHResponse> {
    return this._client.get('/v0/vms/ssh', { query, ...options });
  }
}

export interface VMLogsResponse {
  data: Array<VMLogsResponse.Data>;
}

export namespace VMLogsResponse {
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

export interface VMSSHResponse {
  ssh_hostname: string;

  ssh_port: number;

  ssh_host_keys?: Array<VMSSHResponse.SSHHostKey> | null;
}

export namespace VMSSHResponse {
  export interface SSHHostKey {
    base64_encoded_key: string;

    key_type: string;
  }
}

export interface VMLogsParams {
  instance_id: string;

  order_by: 'seqnum_asc' | 'seqnum_desc';

  before_realtime_timestamp?: string;

  before_seqnum?: number;

  limit?: number;

  since_realtime_timestamp?: string;

  since_seqnum?: number;
}

export interface VMSSHParams {
  vm_id: string;
}

VMs.Script = Script;
VMs.Images = Images;

export declare namespace VMs {
  export {
    type VMLogsResponse as VMLogsResponse,
    type VMSSHResponse as VMSSHResponse,
    type VMLogsParams as VMLogsParams,
    type VMSSHParams as VMSSHParams,
  };

  export {
    Script as Script,
    type UserData as UserData,
    type ScriptCreateResponse as ScriptCreateResponse,
    type ScriptRetrieveResponse as ScriptRetrieveResponse,
    type ScriptCreateParams as ScriptCreateParams,
  };

  export {
    Images as Images,
    type ImageListResponse as ImageListResponse,
    type ImageGetResponse as ImageGetResponse,
  };
}
