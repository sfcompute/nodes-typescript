// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Nodes extends APIResource {}

export type AcceleratorType = 'H100' | 'H200';

export interface CreateNodesRequest {
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

export interface ExtendNodeRequest {
  /**
   * Duration in seconds to extend the node by
   */
  duration_seconds: number;

  /**
   * Max price per hour for the extension in cents
   */
  max_price_per_hour: number;
}

export interface Node {
  id: string;

  gpu_type: AcceleratorType;

  name: string;

  node_type: NodeType;

  owner: string;

  status: Status;

  created_at?: number | null;

  end_at?: number | null;

  max_price_per_hour?: number | null;

  procurement_id?: string | null;

  procurement_status?: ProcurementStatus | null;

  start_at?: number | null;

  updated_at?: number | null;

  /**
   * Possible zones to choose from when creating a node.
   */
  zone?: Zone | null;
}

export type NodeType = 'on_demand' | 'reserved';

export type ProcurementStatus = 'Uninitialized' | 'Active' | 'Ended' | 'AwaitingCapacity';

export type Status = 'Pending' | 'Running' | 'Terminated' | 'Failed' | 'Unknown';

/**
 * Possible zones to choose from when creating a node.
 */
export type Zone = 'hayesvalley';

export declare namespace Nodes {
  export {
    type AcceleratorType as AcceleratorType,
    type CreateNodesRequest as CreateNodesRequest,
    type ErrorDetail as ErrorDetail,
    type ExtendNodeRequest as ExtendNodeRequest,
    type Node as Node,
    type NodeType as NodeType,
    type ProcurementStatus as ProcurementStatus,
    type Status as Status,
    type Zone as Zone,
  };
}
