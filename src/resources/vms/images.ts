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
   * > ⚠️ This endpoint is in [public preview](/preview/roadmap#feature-states).
   *
   * List images in the specified workspace. Pass `sfc:workspace:sfcompute:public` as
   * the workspace to list sfc-provided public images instead.
   */
  list(
    query: ImageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageListResponse> {
    return this._client.get('/preview/v2/images', { query, ...options });
  }

  /**
   * > ⚠️ This endpoint is in [public preview](/preview/roadmap#feature-states).
   *
   * Retrieve an image by ID. Returns both user-owned and public images.
   */
  get(id: string, options?: RequestOptions): APIPromise<ImageGetResponse> {
    return this._client.get(path`/preview/v2/images/${id}`, options);
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
    /**
     * Accepts the canonical prefix below; additional legacy prefixes are aliased for
     * read compatibility. Writes always emit the canonical form.
     */
    id: string;

    /**
     * Unix timestamp.
     */
    created_at: number;

    /**
     * Whether this is an sfc-provided public image.
     */
    is_public: boolean;

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

    /**
     * The workspace that owns this image.
     */
    workspace_id: string;

    provider?: string | null;

    sha256?: string | null;
  }
}

export interface ImageGetResponse {
  /**
   * Accepts the canonical prefix below; additional legacy prefixes are aliased for
   * read compatibility. Writes always emit the canonical form.
   */
  id: string;

  /**
   * Unix timestamp.
   */
  created_at: number;

  /**
   * Whether this is an sfc-provided public image.
   */
  is_public: boolean;

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

  /**
   * The workspace that owns this image.
   */
  workspace_id: string;

  provider?: string | null;

  sha256?: string | null;
}

export interface ImageListParams {
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

  /**
   * Scope the returned list to a single workspace (ID, resource path, or name).
   * Without it, the returned list spans every workspace where the caller has
   * `Image:List` and `Image:Read` (granted at either the workspace or organization
   * level). Public images are not included by default - request them by specifying
   * `sfc:workspace:sfcompute:public` for the `workspace` query parameter.
   */
  workspace?: string;
}

export declare namespace Images {
  export {
    type ImageListResponse as ImageListResponse,
    type ImageGetResponse as ImageGetResponse,
    type ImageListParams as ImageListParams,
  };
}
