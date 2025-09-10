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

/**
 * Response body for listing images
 */
export interface ImageListResponse {
  data: Array<ImageListResponse.Data>;

  has_more: boolean;

  object: 'list';
}

export namespace ImageListResponse {
  /**
   * Response body for individual image info (used in lists)
   */
  export interface Data {
    /**
     * Creation timestamp as Unix timestamp in seconds
     */
    created_at: number;

    /**
     * The image ID
     */
    image_id: string;

    /**
     * Client given name of the image
     */
    name: string;

    object: 'image';

    /**
     * Upload status of the image
     */
    upload_status: string;
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
   * Human readable name of the image
   */
  name: string;

  object: 'image';
}

export declare namespace Images {
  export { type ImageListResponse as ImageListResponse, type ImageGetResponse as ImageGetResponse };
}
