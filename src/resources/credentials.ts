// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CredentialsAPI from './credentials';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Credentials extends APIResource {
  create(body: CredentialCreateParams, options?: RequestOptions): APIPromise<CredentialCreateResponse> {
    return this._client.post('/v0/credentials', { body, ...options });
  }

  retrieve(options?: RequestOptions): APIPromise<CredentialRetrieveResponse> {
    return this._client.get('/v0/credentials', options);
  }

  delete(
    id: string,
    params: CredentialDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<CredentialDeleteResponse> {
    const { body } = params ?? {};
    return this._client.delete(path`/v0/credentials/${id}`, { body: body, ...options });
  }
}

export interface ClusterInfo {
  id?: string;

  kubernetes_api_url?: string;

  kubernetes_ca_cert?: string;

  kubernetes_namespace?: string;

  name?: string;

  object?: string;
}

export interface CredentialCreateResponse {
  id?: string;

  cluster?: ClusterInfo;

  label?: string;

  object?: string;

  pubkey?: string;

  username?: string;
}

export interface CredentialRetrieveResponse {
  data?: Array<CredentialRetrieveResponse.Data>;

  has_more?: boolean;

  object?: string;
}

export namespace CredentialRetrieveResponse {
  export interface Data {
    id?: string;

    cluster?: CredentialsAPI.ClusterInfo;

    cluster_type?: string;

    encrypted_kubeconfig?: string;

    encrypted_token?: string;

    ephemeral_pubkey?: string;

    label?: string;

    nonce?: string;

    object?: string;

    pubkey?: string;

    username?: string;
  }
}

export interface CredentialDeleteResponse {
  id?: string;

  deleted?: boolean;

  object?: string;
}

export interface CredentialCreateParams {
  cluster?: string;

  label?: string;

  object?: string;

  pubkey?: string;

  username?: string;
}

export interface CredentialDeleteParams {
  body?: unknown;
}

export declare namespace Credentials {
  export {
    type ClusterInfo as ClusterInfo,
    type CredentialCreateResponse as CredentialCreateResponse,
    type CredentialRetrieveResponse as CredentialRetrieveResponse,
    type CredentialDeleteResponse as CredentialDeleteResponse,
    type CredentialCreateParams as CredentialCreateParams,
    type CredentialDeleteParams as CredentialDeleteParams,
  };
}
