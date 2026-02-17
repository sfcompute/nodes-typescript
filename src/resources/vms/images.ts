// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Images extends APIResource {
  /**
   * List all VM Images for the authenticated account
   */
  list(options?: RequestOptions): APIPromise<ImageListResponse> {
    return this._client.get('/v1/vms/images', options);
  }

  /**
   * Get the download URL for a VM image by ID
   */
  get(imageID: string, options?: RequestOptions): APIPromise<ImageGetResponse> {
    return this._client.get(path`/v1/vms/images/${imageID}`, options);
  }
}

export interface ImageListResponse {
  data: Array<ImageListResponse.Data>;

  has_more: boolean;

  object: 'list';

  /**
   * Opaque cursor for pagination. Pass as `starting_after` to get the next page.
   */
  cursor?: string | null;
}

export namespace ImageListResponse {
  export interface Data {
    /**
     * Unique identifier with prefix 'image\_'.
     */
    id: string;

    /**
     * Unix timestamp in seconds since epoch
     */
    created_at: number;

    /**
     * A validated resource name. Must start with alphanumeric, followed by
     * alphanumeric, '.', '\_', or '-'. Max 255 characters.
     */
    name: string;

    upload_status: 'started' | 'uploading' | 'completed' | 'failed';

    object?: 'image';

    sha256_hash?: string | null;
  }
}

export interface ImageGetResponse {
  download_url: string;

  /**
   * Unix timestamp in seconds since epoch
   */
  expires_at: number;

  object_size: number;

  sha256_hash: string;
}

export declare namespace Images {
  export { type ImageListResponse as ImageListResponse, type ImageGetResponse as ImageGetResponse };
}
