// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Custom machine images for instances.
 */
export class Images extends APIResource {
  /**
   * > ⚠️ This endpoint is in [public preview](/preview/roadmap).
   *
   * List images in the specified workspace. Pass `sfc:workspace:sfcompute:public` as
   * the workspace to list sfc-provided public images instead.
   */
  list(query: ImageListParams, options?: RequestOptions): APIPromise<ImageListResponse> {
    return this._client.get('/preview/v2/images', {
      query,
      defaultBaseURL: 'https://api.sfcompute.com',
      ...options,
    });
  }

  /**
   * > ⚠️ This endpoint is in [public preview](/preview/roadmap).
   *
   * Retrieve an image by ID. Returns both user-owned and public images.
   */
  get(id: string, options?: RequestOptions): APIPromise<ImageGetResponse> {
    return this._client.get(path`/preview/v2/images/${id}`, {
      defaultBaseURL: 'https://api.sfcompute.com',
      ...options,
    });
  }
}

export interface ImageListResponse {
  data: Array<ImageListResponse.Data>;

  has_more: boolean;

  object: 'list';

  cursor?: string | null;
}

export namespace ImageListResponse {
  export interface Data {
    id: string;

    /**
     * Unix timestamp.
     */
    created_at: number;

    name: string;

    object: 'image';

    owner: string;

    /**
     * A resource path for a image resource. Format:
     * sfc:image:<account>:<workspace>:<name>.
     */
    resource_path: string;

    upload_status: 'started' | 'uploading' | 'completed' | 'failed' | 'revoked';

    workspace: string;

    provider?: string | null;

    sha256?: string | null;
  }
}

export interface ImageGetResponse {
  id: string;

  /**
   * Unix timestamp.
   */
  created_at: number;

  name: string;

  object: 'image';

  owner: string;

  /**
   * A resource path for a image resource. Format:
   * sfc:image:<account>:<workspace>:<name>.
   */
  resource_path: string;

  upload_status: 'started' | 'uploading' | 'completed' | 'failed' | 'revoked';

  workspace: string;

  provider?: string | null;

  sha256?: string | null;
}

export interface ImageListParams {
  /**
   * Filter by workspace. Pass `sfc:workspace:sfcompute:public` to list sfc-provided
   * public images.
   */
  workspace: string;

  /**
   * Filter by image ID (repeatable).
   */
  id?: Array<string>;

  /**
   * Cursor for backward pagination.
   */
  ending_before?: string;

  /**
   * Maximum number of results to return (1-200, default 50).
   */
  limit?: number;

  /**
   * Cursor for forward pagination (from a previous response's `cursor` field).
   */
  starting_after?: string;
}

export declare namespace Images {
  export {
    type ImageListResponse as ImageListResponse,
    type ImageGetResponse as ImageGetResponse,
    type ImageListParams as ImageListParams,
  };
}
