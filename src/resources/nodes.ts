// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as NodesAPI from './nodes';
import { APIPromise } from '../core/api-promise';
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
   *   zone: 'hayesvalley',
   * });
   * ```
   */
  create(body: NodeCreateParams, options?: RequestOptions): APIPromise<ListResponseNode> {
    return this._client.post('/v1/nodes', { body, ...options });
  }

  /**
   * List all VM nodes for the authenticated account
   *
   * @example
   * ```ts
   * const listResponseNode = await client.nodes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ListResponseNode> {
    return this._client.get('/v1/nodes', options);
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
   * Release an on-demand VM node from its procurement, reducing the procurement's
   * desired quantity by 1
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
   * Zone to create the nodes in. See Zone enum for valid values.
   */
  zone: string;

  /**
   * End time as Unix timestamp in seconds. If provided, end time must be aligned to
   * the hour. If not provided, the node will be created as an on-demand node.
   */
  end_at?: number | null;

  /**
   * Custom node names. Names cannot follow the vm\_{alpha_numeric_chars} as this is
   * reserved for system-generated IDs. Names cannot be numeric strings.
   */
  names?: Array<string>;

  node_type?: NodeType | null;

  /**
   * Start time as Unix timestamp in seconds
   */
  start_at?: number;
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
  | 'payment_required';

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

    /**
     * End time as Unix timestamp in seconds
     */
    end_at?: number | null;

    /**
     * Max price per hour you're willing to pay for a node in cents
     */
    max_price_per_node_hour?: number | null;

    procurement_id?: string | null;

    procurement_status?: NodesAPI.ProcurementStatus | null;

    /**
     * Start time as Unix timestamp in seconds
     */
    start_at?: number | null;

    /**
     * Last updated time as Unix timestamp in seconds
     */
    updated_at?: number | null;

    /**
     * Choose from these zones when creating a node
     */
    zone?: NodesAPI.Zone | null;
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

  /**
   * End time as Unix timestamp in seconds
   */
  end_at?: number | null;

  /**
   * Max price per hour you're willing to pay for a node in cents
   */
  max_price_per_node_hour?: number | null;

  procurement_id?: string | null;

  procurement_status?: ProcurementStatus | null;

  /**
   * Start time as Unix timestamp in seconds
   */
  start_at?: number | null;

  /**
   * Last updated time as Unix timestamp in seconds
   */
  updated_at?: number | null;

  /**
   * Choose from these zones when creating a node
   */
  zone?: Zone | null;
}

export type NodeType = 'on_demand' | 'reserved';

export type ProcurementStatus = 'uninitialized' | 'active' | 'ended' | 'awaiting_capacity';

/**
 * Node Status
 */
export type Status = 'pending' | 'running' | 'terminated' | 'failed' | 'unknown';

/**
 * Choose from these zones when creating a node
 */
export type Zone = 'hayesvalley';

export interface NodeCreateParams {
  desired_count: number;

  /**
   * Max price per hour for a node in cents
   */
  max_price_per_node_hour: number;

  /**
   * Zone to create the nodes in. See Zone enum for valid values.
   */
  zone: string;

  /**
   * End time as Unix timestamp in seconds. If provided, end time must be aligned to
   * the hour. If not provided, the node will be created as an on-demand node.
   */
  end_at?: number | null;

  /**
   * Custom node names. Names cannot follow the vm\_{alpha_numeric_chars} as this is
   * reserved for system-generated IDs. Names cannot be numeric strings.
   */
  names?: Array<string>;

  node_type?: NodeType | null;

  /**
   * Start time as Unix timestamp in seconds
   */
  start_at?: number;
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
    type ProcurementStatus as ProcurementStatus,
    type Status as Status,
    type Zone as Zone,
    type NodeCreateParams as NodeCreateParams,
    type NodeExtendParams as NodeExtendParams,
  };
}
