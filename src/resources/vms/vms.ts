// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ImagesAPI from './images';
import { ImageGetResponse, ImageListParams, ImageListResponse, Images } from './images';
import * as ScriptAPI from './script';
import { Script } from './script';

export class VMs extends APIResource {
  script: ScriptAPI.Script = new ScriptAPI.Script(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);
}

VMs.Script = Script;
VMs.Images = Images;

export declare namespace VMs {
  export { Script as Script };

  export {
    Images as Images,
    type ImageListResponse as ImageListResponse,
    type ImageGetResponse as ImageGetResponse,
    type ImageListParams as ImageListParams,
  };
}
