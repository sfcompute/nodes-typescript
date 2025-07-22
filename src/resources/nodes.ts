// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Nodes extends APIResource {
  /**
   * Create VM nodes
   *
   * @example
   * ```ts
   * const nodes = await client.nodes.create({
   *   desired_count: 1,
   *   max_price_per_hour: 1000,
   * });
   * ```
   */
  create(body: NodeCreateParams, options?: RequestOptions): APIPromise<NodeCreateResponse> {
    return this._client.post('/v1/nodes', { body, ...options });
  }

  /**
   * List all VM nodes for the authenticated account
   *
   * @example
   * ```ts
   * const nodes = await client.nodes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<NodeListResponse> {
    return this._client.get('/v1/nodes', options);
  }

  /**
   * Extend the end time of a reservation-based VM node by purchasing additional time
   *
   * @example
   * ```ts
   * const updateNode = await client.nodes.extend('id', {
   *   duration_seconds: 7200,
   *   max_price_per_hour: 1000,
   * });
   * ```
   */
  extend(id: string, body: NodeExtendParams, options?: RequestOptions): APIPromise<UpdateNode> {
    return this._client.patch(path`/v1/nodes/${id}/extend`, { body, ...options });
  }

  /**
   * Release an on-demand VM node from its procurement, reducing the procurement's
   * desired quantity by 1
   *
   * @example
   * ```ts
   * const updateNode = await client.nodes.release('id', {
   *   body: {},
   * });
   * ```
   */
  release(id: string, params: NodeReleaseParams, options?: RequestOptions): APIPromise<UpdateNode> {
    const { body } = params;
    return this._client.patch(path`/v1/nodes/${id}/release`, { body: body, ...options });
  }
}

export interface Node {
  id: string;

  gpu_type: 'H100' | 'H200';

  name: string;

  node_type: NodeType;

  owner: string;

  status: 'Pending' | 'Running' | 'Terminated' | 'Failed' | 'Unknown';

  created_at?: number | null;

  end_at?: number | null;

  max_price_per_hour?: number | null;

  procurement_id?: string | null;

  procurement_status?: 'Uninitialized' | 'Active' | 'Ended' | 'AwaitingCapacity' | null;

  start_at?: number | null;

  updated_at?: number | null;

  /**
   * Possible zones to choose from when creating a node.
   */
  zone?: 'hayesvalley' | null;
}

export type NodeType = 'on_demand' | 'reserved';

export interface UpdateNode {
  node: Node;
}

export type NodeCreateResponse = Array<Node>;

export type NodeListResponse = Array<Node>;

export interface NodeCreateParams {
  desired_count: number;

  max_price_per_hour: number;

  /**
   * End time as Unix timestamp in seconds
   */
  end_at?: number;

  /**
   * Custom node names. Names cannot follow the vm*id pattern vm*{16_hex_chars} as
   * this is reserved for system-generated IDs.
   */
  names?: Array<string>;

  node_type?: NodeType | null;

  /**
   * Start time as Unix timestamp in seconds
   */
  start_at?: number;

  zone?: string;
}

export interface NodeExtendParams {
  /**
   * Duration in seconds to extend the node by
   */
  duration_seconds: number;

  /**
   * Max price per hour for the extension in cents
   */
  max_price_per_hour: number;
}

export interface NodeReleaseParams {
  body: unknown;
}

export declare namespace Nodes {
  export {
    type Node as Node,
    type NodeType as NodeType,
    type UpdateNode as UpdateNode,
    type NodeCreateResponse as NodeCreateResponse,
    type NodeListResponse as NodeListResponse,
    type NodeCreateParams as NodeCreateParams,
    type NodeExtendParams as NodeExtendParams,
    type NodeReleaseParams as NodeReleaseParams,
  };
}
