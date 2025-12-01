// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as NodesAPI from './nodes';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Zones extends APIResource {
  /**
   * List all available zones
   */
  list(options?: RequestOptions): APIPromise<ZoneListResponse> {
    return this._client.get('/v0/zones', options);
  }

  /**
   * Get detailed information about a specific zone
   */
  get(id: string, options?: RequestOptions): APIPromise<ZoneGetResponse> {
    return this._client.get(path`/v0/zones/${id}`, options);
  }
}

export interface ZoneListResponse {
  data: Array<ZoneListResponse.Data>;

  object: string;
}

export namespace ZoneListResponse {
  export interface Data {
    /**
     * The available capacity on this cluster, in the shape of consecutive
     * "availability rectangles".
     */
    available_capacity: Array<Data.AvailableCapacity>;

    delivery_type: 'K8s' | 'VM';

    hardware_type: NodesAPI.AcceleratorType;

    interconnect_type: 'Infiniband' | 'None';

    name: string;

    object: string;

    region: 'NorthAmerica' | 'AsiaPacific' | 'EuropeMiddleEastAfrica';
  }

  export namespace Data {
    export interface AvailableCapacity {
      /**
       * Unix timestamp in seconds since epoch
       */
      end_timestamp: number;

      /**
       * The number of nodes available during this time period
       */
      quantity: number;

      /**
       * Unix timestamp in seconds since epoch
       */
      start_timestamp: number;
    }
  }
}

export interface ZoneGetResponse {
  /**
   * The available capacity on this cluster, in the shape of consecutive
   * "availability rectangles".
   */
  available_capacity: Array<ZoneGetResponse.AvailableCapacity>;

  delivery_type: 'K8s' | 'VM';

  hardware_type: NodesAPI.AcceleratorType;

  interconnect_type: 'Infiniband' | 'None';

  name: string;

  object: string;

  region: 'NorthAmerica' | 'AsiaPacific' | 'EuropeMiddleEastAfrica';
}

export namespace ZoneGetResponse {
  export interface AvailableCapacity {
    /**
     * Unix timestamp in seconds since epoch
     */
    end_timestamp: number;

    /**
     * The number of nodes available during this time period
     */
    quantity: number;

    /**
     * Unix timestamp in seconds since epoch
     */
    start_timestamp: number;
  }
}

export declare namespace Zones {
  export { type ZoneListResponse as ZoneListResponse, type ZoneGetResponse as ZoneGetResponse };
}
