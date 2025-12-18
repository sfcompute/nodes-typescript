// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as NodesAPI from './nodes';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Nodes extends APIResource {
  /**
   * Create VM nodes
   *
   * @example
   * ```ts
   * const listResponseNode = await client.nodes.create({
   *   desired_count: 1,
   *   max_price_per_node_hour: 1000,
   * });
   * ```
   */
  create(body: NodeCreateParams, options?: RequestOptions): APIPromise<ListResponseNode> {
    return this._client.post('/v1/nodes', { body, ...options });
  }

  /**
   * List all nodes for the authenticated account
   *
   * @example
   * ```ts
   * const listResponseNode = await client.nodes.list();
   * ```
   */
  list(
    query: NodeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListResponseNode> {
    return this._client.get('/v1/nodes', { query, ...options });
  }

  /**
   * Delete a node by id. The node cannot be deleted if it has active or pending VMs.
   *
   * @example
   * ```ts
   * await client.nodes.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/nodes/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Purchase additional time to extend the end time of a reserved VM node
   *
   * @example
   * ```ts
   * const node = await client.nodes.extend('id', {
   *   duration_seconds: 7200,
   *   max_price_per_node_hour: 1000,
   * });
   * ```
   */
  extend(id: string, body: NodeExtendParams, options?: RequestOptions): APIPromise<Node> {
    return this._client.patch(path`/v1/nodes/${id}/extend`, { body, ...options });
  }

  /**
   * Retrieve details of a specific node by its ID or name
   *
   * @example
   * ```ts
   * const node = await client.nodes.get('id');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<Node> {
    return this._client.get(path`/v1/nodes/${id}`, options);
  }

  /**
   * Redeploy a node by replacing its current VM with a new one. Optionally update
   * the VM image and cloud init user data.
   *
   * @example
   * ```ts
   * const node = await client.nodes.redeploy('id');
   * ```
   */
  redeploy(id: string, body: NodeRedeployParams, options?: RequestOptions): APIPromise<Node> {
    return this._client.put(path`/v1/nodes/${id}/redeploy`, { body, ...options });
  }

  /**
   * Release an auto reserved VM node from its procurement, reducing the
   * procurement's desired quantity by 1
   *
   * @example
   * ```ts
   * const node = await client.nodes.release('id');
   * ```
   */
  release(id: string, options?: RequestOptions): APIPromise<Node> {
    return this._client.patch(path`/v1/nodes/${id}/release`, options);
  }
}

export type AcceleratorType = 'H100' | 'H200';

export interface CreateNodesRequest {
  desired_count: number;

  /**
   * Max price per hour for a node in cents
   */
  max_price_per_node_hour: number;

  /**
   * Allow auto reserved nodes to be created in any zone that meets the requirements
   */
  any_zone?: boolean;

  /**
   * User script to be executed during the VM's boot process Data should be base64
   * encoded
   */
  cloud_init_user_data?: string;

  /**
   * End time as Unix timestamp in seconds If provided, end time must be aligned to
   * the hour If not provided, the node will be created as an autoreserved node
   */
  end_at?: number | null;

  /**
   * Custom image ID to use for the VM instances
   */
  image_id?: string;

  /**
   * Custom node names Names cannot begin with 'vm*' or 'n*' as this is reserved for
   * system-generated IDs Names cannot be numeric strings Names cannot exceed 128
   * characters
   */
  names?: Array<string>;

  node_type?: NodeType | null;

  /**
   * Start time as Unix timestamp in seconds Optional for reserved nodes. If not
   * provided, defaults to now
   */
  start_at?: number;

  /**
   * Zone to create the nodes in. Required for auto reserved nodes if any_zone is
   * false.
   */
  zone?: string;
}

export interface ErrorContent {
  message: string;

  type: ErrorType;

  details?: Array<ErrorDetail>;
}

export interface ErrorDetail {
  /**
   * Specific error code for this detail
   */
  code: string;

  /**
   * Detailed error message
   */
  message: string;

  /**
   * The field that caused the error (for validation errors)
   */
  field?: string | null;
}

export interface ErrorObject {
  error: ErrorContent;
}

export type ErrorType =
  | 'api_error'
  | 'invalid_request_error'
  | 'authentication_error'
  | 'idempotency_error'
  | 'conflict'
  | 'not_found'
  | 'request_timed_out'
  | 'forbidden'
  | 'not_implemented'
  | 'upgrade_required'
  | 'payment_required'
  | 'service_unavailable'
  | 'unprocessable_entity'
  | 'resource_unavailable';

export interface ExtendNodeRequest {
  /**
   * Duration in seconds to extend the node Must be at least 1 hour (3600 seconds)
   * and a multiple of 1 hour.
   */
  duration_seconds: number;

  /**
   * Max price per hour for the extension in cents
   */
  max_price_per_node_hour: number;
}

export interface ListResponseNode {
  data: Array<ListResponseNode.Data>;

  object: string;
}

export namespace ListResponseNode {
  export interface Data {
    id: string;

    gpu_type: NodesAPI.AcceleratorType;

    name: string;

    node_type: NodesAPI.NodeType;

    object: string;

    owner: string;

    /**
     * Node Status
     */
    status: NodesAPI.Status;

    /**
     * Creation time as Unix timestamp in seconds
     */
    created_at?: number | null;

    current_vm?: Data.CurrentVM | null;

    /**
     * Deletion time as Unix timestamp in seconds
     */
    deleted_at?: number | null;

    /**
     * End time as Unix timestamp in seconds
     */
    end_at?: number | null;

    /**
     * Max price per hour you're willing to pay for a node in cents
     */
    max_price_per_node_hour?: number | null;

    procurement_id?: string | null;

    /**
     * Start time as Unix timestamp in seconds
     */
    start_at?: number | null;

    /**
     * Last updated time as Unix timestamp in seconds
     */
    updated_at?: number | null;

    vms?: Data.VMs | null;

    zone?: string | null;
  }

  export namespace Data {
    export interface CurrentVM {
      id: string;

      created_at: number;

      end_at: number | null;

      object: string;

      start_at: number | null;

      status: 'Pending' | 'Running' | 'Destroyed' | 'NodeFailure' | 'Unspecified';

      updated_at: number;

      zone: string;

      image_id?: string | null;
    }

    export interface VMs {
      data: Array<VMs.Data>;

      object: string;
    }

    export namespace VMs {
      export interface Data {
        id: string;

        created_at: number;

        end_at: number | null;

        object: string;

        start_at: number | null;

        status: 'Pending' | 'Running' | 'Destroyed' | 'NodeFailure' | 'Unspecified';

        updated_at: number;

        zone: string;

        image_id?: string | null;
      }
    }
  }
}

export interface Node {
  id: string;

  gpu_type: AcceleratorType;

  name: string;

  node_type: NodeType;

  object: string;

  owner: string;

  /**
   * Node Status
   */
  status: Status;

  /**
   * Creation time as Unix timestamp in seconds
   */
  created_at?: number | null;

  current_vm?: Node.CurrentVM | null;

  /**
   * Deletion time as Unix timestamp in seconds
   */
  deleted_at?: number | null;

  /**
   * End time as Unix timestamp in seconds
   */
  end_at?: number | null;

  /**
   * Max price per hour you're willing to pay for a node in cents
   */
  max_price_per_node_hour?: number | null;

  procurement_id?: string | null;

  /**
   * Start time as Unix timestamp in seconds
   */
  start_at?: number | null;

  /**
   * Last updated time as Unix timestamp in seconds
   */
  updated_at?: number | null;

  vms?: Node.VMs | null;

  zone?: string | null;
}

export namespace Node {
  export interface CurrentVM {
    id: string;

    created_at: number;

    end_at: number | null;

    object: string;

    start_at: number | null;

    status: 'Pending' | 'Running' | 'Destroyed' | 'NodeFailure' | 'Unspecified';

    updated_at: number;

    zone: string;

    image_id?: string | null;
  }

  export interface VMs {
    data: Array<VMs.Data>;

    object: string;
  }

  export namespace VMs {
    export interface Data {
      id: string;

      created_at: number;

      end_at: number | null;

      object: string;

      start_at: number | null;

      status: 'Pending' | 'Running' | 'Destroyed' | 'NodeFailure' | 'Unspecified';

      updated_at: number;

      zone: string;

      image_id?: string | null;
    }
  }
}

export type NodeType = 'autoreserved' | 'reserved';

/**
 * Node Status
 */
export type Status =
  | 'pending'
  | 'awaitingcapacity'
  | 'running'
  | 'released'
  | 'terminated'
  | 'deleted'
  | 'failed'
  | 'unknown';

export interface NodeCreateParams {
  desired_count: number;

  /**
   * Max price per hour for a node in cents
   */
  max_price_per_node_hour: number;

  /**
   * Allow auto reserved nodes to be created in any zone that meets the requirements
   */
  any_zone?: boolean;

  /**
   * User script to be executed during the VM's boot process Data should be base64
   * encoded
   */
  cloud_init_user_data?: string;

  /**
   * End time as Unix timestamp in seconds If provided, end time must be aligned to
   * the hour If not provided, the node will be created as an autoreserved node
   */
  end_at?: number | null;

  /**
   * Custom image ID to use for the VM instances
   */
  image_id?: string;

  /**
   * Custom node names Names cannot begin with 'vm*' or 'n*' as this is reserved for
   * system-generated IDs Names cannot be numeric strings Names cannot exceed 128
   * characters
   */
  names?: Array<string>;

  node_type?: NodeType | null;

  /**
   * Start time as Unix timestamp in seconds Optional for reserved nodes. If not
   * provided, defaults to now
   */
  start_at?: number;

  /**
   * Zone to create the nodes in. Required for auto reserved nodes if any_zone is
   * false.
   */
  zone?: string;
}

export interface NodeListParams {
  /**
   * Filter nodes by node_id Use ?id=n_b1dc52505c6db142&id=n_b1dc52505c6db133 to
   * specify multiple IDs. Cannot combine with name or node_type
   */
  id?: Array<string>;

  /**
   * Filter nodes by their names Use ?name=val1&name=val2 to specify multiple names.
   * Cannot combine with id or node_type
   */
  name?: Array<string>;

  /**
   * Filter nodes by their type Cannot combine with id or name
   */
  type?: NodeType;
}

export interface NodeExtendParams {
  /**
   * Duration in seconds to extend the node Must be at least 1 hour (3600 seconds)
   * and a multiple of 1 hour.
   */
  duration_seconds: number;

  /**
   * Max price per hour for the extension in cents
   */
  max_price_per_node_hour: number;
}

export interface NodeRedeployParams {
  /**
   * Update the cloud init user data for VMs running on this node Data should be
   * base64 encoded
   */
  cloud_init_user_data?: string;

  /**
   * Redeploy node with this VM image ID
   */
  image_id?: string;

  /**
   * If false, then the new VM will inherit any configuration (like image_id,
   * cloud_init_user_data) that is left empty in this request from the current VM.
   *
   * If true, then any configuration left empty will be set as empty in the new VM.
   * E.g if cloud_init_user_data is left unset and override_empty is true, then the
   * new VM will not have any cloud init user data. override_empty defaults to false.
   */
  override_empty?: boolean;
}

export declare namespace Nodes {
  export {
    type AcceleratorType as AcceleratorType,
    type CreateNodesRequest as CreateNodesRequest,
    type ErrorContent as ErrorContent,
    type ErrorDetail as ErrorDetail,
    type ErrorObject as ErrorObject,
    type ErrorType as ErrorType,
    type ExtendNodeRequest as ExtendNodeRequest,
    type ListResponseNode as ListResponseNode,
    type Node as Node,
    type NodeType as NodeType,
    type Status as Status,
    type NodeCreateParams as NodeCreateParams,
    type NodeListParams as NodeListParams,
    type NodeExtendParams as NodeExtendParams,
    type NodeRedeployParams as NodeRedeployParams,
  };
}
