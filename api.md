# Vms

Types:

- <code><a href="./src/resources/vms/vms.ts">VmLogsResponse</a></code>
- <code><a href="./src/resources/vms/vms.ts">VmSSHResponse</a></code>

Methods:

- <code title="get /v0/vms/logs2">client.vms.<a href="./src/resources/vms/vms.ts">logs</a>({ ...params }) -> VmLogsResponse</code>
- <code title="get /v0/vms/ssh">client.vms.<a href="./src/resources/vms/vms.ts">ssh</a>({ ...params }) -> VmSSHResponse</code>

## Script

Types:

- <code><a href="./src/resources/vms/script.ts">UserData</a></code>
- <code><a href="./src/resources/vms/script.ts">ScriptCreateResponse</a></code>
- <code><a href="./src/resources/vms/script.ts">ScriptRetrieveResponse</a></code>

Methods:

- <code title="post /v0/vms/script">client.vms.script.<a href="./src/resources/vms/script.ts">create</a>({ ...params }) -> ScriptCreateResponse</code>
- <code title="get /v0/vms/script">client.vms.script.<a href="./src/resources/vms/script.ts">retrieve</a>() -> ScriptRetrieveResponse</code>

# Nodes

Types:

- <code><a href="./src/resources/nodes.ts">Node</a></code>
- <code><a href="./src/resources/nodes.ts">NodeType</a></code>
- <code><a href="./src/resources/nodes.ts">NodeCreateResponse</a></code>
- <code><a href="./src/resources/nodes.ts">NodeListResponse</a></code>

Methods:

- <code title="post /v1/nodes">client.nodes.<a href="./src/resources/nodes.ts">create</a>({ ...params }) -> NodeCreateResponse</code>
- <code title="get /v1/nodes">client.nodes.<a href="./src/resources/nodes.ts">list</a>() -> NodeListResponse</code>
- <code title="patch /v1/nodes/{id}/extend">client.nodes.<a href="./src/resources/nodes.ts">extend</a>(id, { ...params }) -> Node</code>
- <code title="patch /v1/nodes/{id}/release">client.nodes.<a href="./src/resources/nodes.ts">release</a>(id) -> Node</code>
