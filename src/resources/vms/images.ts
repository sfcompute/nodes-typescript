// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Images extends APIResource {
  completeUpload(imageID: string, options?: RequestOptions): APIPromise<ImageCompleteUploadResponse> {
    return this._client.patch(path`/v1/vms/images/${imageID}/complete_upload`, options);
  }

  /**
   * Get the download URL for a VM image by ID
   */
  get(imageID: string, options?: RequestOptions): APIPromise<ImageGetResponse> {
    return this._client.get(path`/v1/vms/images/${imageID}`, options);
  }

  startUpload(body: ImageStartUploadParams, options?: RequestOptions): APIPromise<ImageStartUploadResponse> {
    return this._client.post('/v1/vms/images/start_upload', { body, ...options });
  }

  upload(
    imageID: string,
    body: ImageUploadParams,
    options?: RequestOptions,
  ): APIPromise<ImageUploadResponse> {
    return this._client.post(path`/v1/vms/images/${imageID}/upload`, { body, ...options });
  }
}

/**
 * Response body for completing a multipart upload
 */
export interface ImageCompleteUploadResponse {
  /**
   * The image ID
   */
  image_id: string;

  object: 'image';

  /**
   * Status of the upload verification
   */
  upload_status: string;
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

/**
 * Response body for starting a multipart upload
 */
export interface ImageStartUploadResponse {
  /**
   * The image ID for the created image
   */
  image_id: string;

  object: 'image';
}

/**
 * Response body for image upload presigned URL generation
 */
export interface ImageUploadResponse {
  /**
   * Timestamp when the presigned URL expires (RFC 3339 format)
   */
  expires_at: string;

  /**
   * The presigned URL that can be used to upload the image part
   */
  upload_url: string;
}

export interface ImageStartUploadParams {
  /**
   * Name of the image file
   */
  name: string;
}

export interface ImageUploadParams {
  /**
   * part idx (1-based)
   */
  part_id: number;
}

export declare namespace Images {
  export {
    type ImageCompleteUploadResponse as ImageCompleteUploadResponse,
    type ImageGetResponse as ImageGetResponse,
    type ImageStartUploadResponse as ImageStartUploadResponse,
    type ImageUploadResponse as ImageUploadResponse,
    type ImageStartUploadParams as ImageStartUploadParams,
    type ImageUploadParams as ImageUploadParams,
  };
}
