// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ContractsAPI from './contracts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Clusters extends APIResource {
  list(options?: RequestOptions): APIPromise<ClusterListResponse> {
    return this._client.get('/v0/clusters', options);
  }
}

export interface ClusterListResponse {
  data: Array<ClusterListResponse.Data>;

  has_more: boolean;

  object: 'list';
}

export namespace ClusterListResponse {
  export interface Data {
    /**
     * Namespace in format sf-<account_id>
     */
    kubernetes_namespace: string;

    /**
     * Unique name of the cluster
     */
    name: string;

    object: 'kubernetes_cluster';

    contract?: ContractsAPI.ActiveContract | ContractsAPI.PendingContract;

    /**
     * The Kubernetes API URL for the cluster
     */
    kubernetes_api_url?: string;

    /**
     * The CA certificate for the cluster
     */
    kubernetes_ca_cert?: string;
  }
}

export declare namespace Clusters {
  export { type ClusterListResponse as ClusterListResponse };
}
