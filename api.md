# VMs

Types:

- <code><a href="./src/resources/vms/vms.ts">VMLogsResponse</a></code>
- <code><a href="./src/resources/vms/vms.ts">VMSSHResponse</a></code>

Methods:

- <code title="get /v0/vms/logs2">client.vms.<a href="./src/resources/vms/vms.ts">logs</a>({ ...params }) -> VMLogsResponse</code>
- <code title="get /v0/vms/ssh">client.vms.<a href="./src/resources/vms/vms.ts">ssh</a>({ ...params }) -> VMSSHResponse</code>

## Script

Types:

- <code><a href="./src/resources/vms/script.ts">UserData</a></code>
- <code><a href="./src/resources/vms/script.ts">ScriptCreateResponse</a></code>
- <code><a href="./src/resources/vms/script.ts">ScriptRetrieveResponse</a></code>

Methods:

- <code title="post /v0/vms/script">client.vms.script.<a href="./src/resources/vms/script.ts">create</a>({ ...params }) -> ScriptCreateResponse</code>
- <code title="get /v0/vms/script">client.vms.script.<a href="./src/resources/vms/script.ts">retrieve</a>() -> ScriptRetrieveResponse</code>

## Images

Types:

- <code><a href="./src/resources/vms/images.ts">ImageCompleteUploadResponse</a></code>
- <code><a href="./src/resources/vms/images.ts">ImageGetResponse</a></code>
- <code><a href="./src/resources/vms/images.ts">ImageStartUploadResponse</a></code>
- <code><a href="./src/resources/vms/images.ts">ImageUploadResponse</a></code>

Methods:

- <code title="patch /v1/vms/images/{image_id}/complete_upload">client.vms.images.<a href="./src/resources/vms/images.ts">completeUpload</a>(imageID) -> ImageCompleteUploadResponse</code>
- <code title="get /v1/vms/images/{image_id}">client.vms.images.<a href="./src/resources/vms/images.ts">get</a>(imageID) -> ImageGetResponse</code>
- <code title="post /v1/vms/images/start_upload">client.vms.images.<a href="./src/resources/vms/images.ts">startUpload</a>({ ...params }) -> ImageStartUploadResponse</code>
- <code title="post /v1/vms/images/{image_id}/upload">client.vms.images.<a href="./src/resources/vms/images.ts">upload</a>(imageID, { ...params }) -> ImageUploadResponse</code>

# Nodes

Types:

- <code><a href="./src/resources/nodes.ts">AcceleratorType</a></code>
- <code><a href="./src/resources/nodes.ts">CreateNodesRequest</a></code>
- <code><a href="./src/resources/nodes.ts">ErrorContent</a></code>
- <code><a href="./src/resources/nodes.ts">ErrorDetail</a></code>
- <code><a href="./src/resources/nodes.ts">ErrorObject</a></code>
- <code><a href="./src/resources/nodes.ts">ErrorType</a></code>
- <code><a href="./src/resources/nodes.ts">ExtendNodeRequest</a></code>
- <code><a href="./src/resources/nodes.ts">ListResponseNode</a></code>
- <code><a href="./src/resources/nodes.ts">Node</a></code>
- <code><a href="./src/resources/nodes.ts">NodeType</a></code>
- <code><a href="./src/resources/nodes.ts">Status</a></code>

Methods:

- <code title="post /v1/nodes">client.nodes.<a href="./src/resources/nodes.ts">create</a>({ ...params }) -> ListResponseNode</code>
- <code title="get /v1/nodes">client.nodes.<a href="./src/resources/nodes.ts">list</a>({ ...params }) -> ListResponseNode</code>
- <code title="patch /v1/nodes/{id}/extend">client.nodes.<a href="./src/resources/nodes.ts">extend</a>(id, { ...params }) -> Node</code>
- <code title="get /v1/nodes/{id}">client.nodes.<a href="./src/resources/nodes.ts">get</a>(id) -> Node</code>
- <code title="patch /v1/nodes/{id}/release">client.nodes.<a href="./src/resources/nodes.ts">release</a>(id) -> Node</code>
