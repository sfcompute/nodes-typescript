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

  object: 'list';
}

export namespace ImageListResponse {
  export interface Data {
    id: string;

    /**
     * Unix timestamp in seconds since epoch
     */
    created_at: number;

    name: string;

    upload_status: string;

    object?: 'image';

    sha256_hash?: string | null;
  }
}

/**
 * Response body for image download presigned URL generation
 */
export interface ImageGetResponse {
  /**
   * The presigned URL that can be used to download the image
   */
  download_url: string;

  /**
   * Timestamp when the presigned URL expires (RFC 3339 format)
   */
  expires_at: string;

  /**
   * The image ID
   */
  image_id: string;

  /**
   * Human readable name of the image. Must be unique per account.
   */
  name: string;

  object: 'image';

  /**
   * Size of the image file in bytes
   */
  object_size: number;

  /**
   * SHA256 hash of the image file for integrity verification
   */
  sha256_hash: string;
}

export declare namespace Images {
  export { type ImageListResponse as ImageListResponse, type ImageGetResponse as ImageGetResponse };
}
