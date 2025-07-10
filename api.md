# Refunds

Types:

- <code><a href="./src/resources/refunds.ts">RefundListResponse</a></code>

Methods:

- <code title="get /v0/refunds">client.refunds.<a href="./src/resources/refunds.ts">list</a>() -> RefundListResponse</code>

# Balance

Types:

- <code><a href="./src/resources/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="get /v0/balance">client.balance.<a href="./src/resources/balance.ts">retrieve</a>() -> BalanceRetrieveResponse</code>

# Clusters

Types:

- <code><a href="./src/resources/clusters.ts">ClusterListResponse</a></code>

Methods:

- <code title="get /v0/clusters">client.clusters.<a href="./src/resources/clusters.ts">list</a>() -> ClusterListResponse</code>

# Contracts

Types:

- <code><a href="./src/resources/contracts.ts">ActiveContract</a></code>
- <code><a href="./src/resources/contracts.ts">PendingContract</a></code>
- <code><a href="./src/resources/contracts.ts">ContractRetrieveResponse</a></code>
- <code><a href="./src/resources/contracts.ts">ContractListResponse</a></code>

Methods:

- <code title="get /v0/contracts/{id}">client.contracts.<a href="./src/resources/contracts.ts">retrieve</a>(id) -> ContractRetrieveResponse</code>
- <code title="get /v0/contracts">client.contracts.<a href="./src/resources/contracts.ts">list</a>({ ...params }) -> ContractListResponse</code>

# Me

Types:

- <code><a href="./src/resources/me.ts">MeRetrieveResponse</a></code>

Methods:

- <code title="get /v0/me">client.me.<a href="./src/resources/me.ts">retrieve</a>() -> MeRetrieveResponse</code>

# Prices

Types:

- <code><a href="./src/resources/prices.ts">PriceListResponse</a></code>

Methods:

- <code title="get /v0/prices">client.prices.<a href="./src/resources/prices.ts">list</a>({ ...params }) -> PriceListResponse</code>

# Procurements

Types:

- <code><a href="./src/resources/procurements.ts">AnywhereColocationStrategy</a></code>
- <code><a href="./src/resources/procurements.ts">ColocateColocationStrategy</a></code>
- <code><a href="./src/resources/procurements.ts">ColocatePinnedColocationStrategy</a></code>
- <code><a href="./src/resources/procurements.ts">PinnedColocationStrategy</a></code>
- <code><a href="./src/resources/procurements.ts">Procurement</a></code>
- <code><a href="./src/resources/procurements.ts">ProcurementListResponse</a></code>

Methods:

- <code title="post /v0/procurements">client.procurements.<a href="./src/resources/procurements.ts">create</a>({ ...params }) -> Procurement</code>
- <code title="get /v0/procurements/{id}">client.procurements.<a href="./src/resources/procurements.ts">retrieve</a>(id) -> Procurement</code>
- <code title="patch /v0/procurements/{id}">client.procurements.<a href="./src/resources/procurements.ts">update</a>(id, { ...params }) -> Procurement</code>
- <code title="get /v0/procurements">client.procurements.<a href="./src/resources/procurements.ts">list</a>() -> ProcurementListResponse</code>

# Tokens

Types:

- <code><a href="./src/resources/tokens.ts">SanFranciscoComputeDocumentationToken</a></code>
- <code><a href="./src/resources/tokens.ts">TokenListResponse</a></code>
- <code><a href="./src/resources/tokens.ts">TokenDeleteResponse</a></code>

Methods:

- <code title="post /v0/tokens">client.tokens.<a href="./src/resources/tokens.ts">create</a>({ ...params }) -> SanFranciscoComputeDocumentationToken</code>
- <code title="get /v0/tokens">client.tokens.<a href="./src/resources/tokens.ts">list</a>({ ...params }) -> TokenListResponse</code>
- <code title="delete /v0/tokens/{id}">client.tokens.<a href="./src/resources/tokens.ts">delete</a>(id) -> TokenDeleteResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">AccountKind</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /v0/transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

# Vms

Types:

- <code><a href="./src/resources/vms/vms.ts">VmListInstancesResponse</a></code>
- <code><a href="./src/resources/vms/vms.ts">VmReplaceResponse</a></code>
- <code><a href="./src/resources/vms/vms.ts">VmRetrieveLogsResponse</a></code>
- <code><a href="./src/resources/vms/vms.ts">VmRetrieveLogs2Response</a></code>
- <code><a href="./src/resources/vms/vms.ts">VmRetrieveSSHResponse</a></code>

Methods:

- <code title="get /v0/vms/instances">client.vms.<a href="./src/resources/vms/vms.ts">listInstances</a>() -> VmListInstancesResponse</code>
- <code title="post /v0/vms/replace">client.vms.<a href="./src/resources/vms/vms.ts">replace</a>({ ...params }) -> VmReplaceResponse</code>
- <code title="get /v0/vms/logs">client.vms.<a href="./src/resources/vms/vms.ts">retrieveLogs</a>({ ...params }) -> VmRetrieveLogsResponse</code>
- <code title="get /v0/vms/logs2">client.vms.<a href="./src/resources/vms/vms.ts">retrieveLogs2</a>({ ...params }) -> VmRetrieveLogs2Response</code>
- <code title="get /v0/vms/ssh">client.vms.<a href="./src/resources/vms/vms.ts">retrieveSSH</a>({ ...params }) -> VmRetrieveSSHResponse</code>

## Script

Types:

- <code><a href="./src/resources/vms/script.ts">UserData</a></code>
- <code><a href="./src/resources/vms/script.ts">ScriptCreateResponse</a></code>
- <code><a href="./src/resources/vms/script.ts">ScriptRetrieveResponse</a></code>

Methods:

- <code title="post /v0/vms/script">client.vms.script.<a href="./src/resources/vms/script.ts">create</a>({ ...params }) -> ScriptCreateResponse</code>
- <code title="get /v0/vms/script">client.vms.script.<a href="./src/resources/vms/script.ts">retrieve</a>() -> ScriptRetrieveResponse</code>

# Quote

Types:

- <code><a href="./src/resources/quote.ts">QuoteRetrieveResponse</a></code>

Methods:

- <code title="get /v0/quote">client.quote.<a href="./src/resources/quote.ts">retrieve</a>({ ...params }) -> QuoteRetrieveResponse</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">OrderResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderCancelResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderCancelAllResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderGetClustersResponse</a></code>

Methods:

- <code title="post /v0/orders">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="get /v0/orders/{id}">client.orders.<a href="./src/resources/orders.ts">retrieve</a>(id) -> OrderResponse</code>
- <code title="get /v0/orders">client.orders.<a href="./src/resources/orders.ts">list</a>({ ...params }) -> OrderListResponse</code>
- <code title="delete /v0/orders/{id}">client.orders.<a href="./src/resources/orders.ts">cancel</a>(id) -> OrderCancelResponse</code>
- <code title="delete /v0/orders">client.orders.<a href="./src/resources/orders.ts">cancelAll</a>() -> OrderCancelAllResponse</code>
- <code title="get /v0/orders/{id}/clusters">client.orders.<a href="./src/resources/orders.ts">getClusters</a>(id) -> OrderGetClustersResponse</code>

# Credentials

Types:

- <code><a href="./src/resources/credentials.ts">ClusterInfo</a></code>
- <code><a href="./src/resources/credentials.ts">CredentialCreateResponse</a></code>
- <code><a href="./src/resources/credentials.ts">CredentialRetrieveResponse</a></code>
- <code><a href="./src/resources/credentials.ts">CredentialDeleteResponse</a></code>

Methods:

- <code title="post /v0/credentials">client.credentials.<a href="./src/resources/credentials.ts">create</a>({ ...params }) -> CredentialCreateResponse</code>
- <code title="get /v0/credentials">client.credentials.<a href="./src/resources/credentials.ts">retrieve</a>() -> CredentialRetrieveResponse</code>
- <code title="delete /v0/credentials/{id}">client.credentials.<a href="./src/resources/credentials.ts">delete</a>(id, { ...params }) -> CredentialDeleteResponse</code>

# \_Healthz

Types:

- <code><a href="./src/resources/-healthz.ts">HealthzCheckResponse</a></code>

Methods:

- <code title="get /v1/_healthz">client.\_healthz.<a href="./src/resources/-healthz.ts">check</a>() -> string</code>

# Nodes

Types:

- <code><a href="./src/resources/nodes.ts">Node</a></code>
- <code><a href="./src/resources/nodes.ts">NodeType</a></code>
- <code><a href="./src/resources/nodes.ts">UpdateNode</a></code>
- <code><a href="./src/resources/nodes.ts">NodeCreateResponse</a></code>
- <code><a href="./src/resources/nodes.ts">NodeListResponse</a></code>

Methods:

- <code title="post /v1/nodes">client.nodes.<a href="./src/resources/nodes.ts">create</a>({ ...params }) -> NodeCreateResponse</code>
- <code title="get /v1/nodes">client.nodes.<a href="./src/resources/nodes.ts">list</a>() -> NodeListResponse</code>
- <code title="patch /v1/nodes/{id}/extend">client.nodes.<a href="./src/resources/nodes.ts">extend</a>(id, { ...params }) -> UpdateNode</code>
- <code title="patch /v1/nodes/{id}/release">client.nodes.<a href="./src/resources/nodes.ts">release</a>(id, { ...params }) -> UpdateNode</code>

# Account

Types:

- <code><a href="./src/resources/account.ts">AccountRetrieveMeResponse</a></code>

Methods:

- <code title="get /v1/account/me">client.account.<a href="./src/resources/account.ts">retrieveMe</a>() -> AccountRetrieveMeResponse</code>

# Credits

Types:

- <code><a href="./src/resources/credits.ts">CreditRetrieveResponse</a></code>
- <code><a href="./src/resources/credits.ts">CreditMigrateResponse</a></code>

Methods:

- <code title="get /v1/credits">client.credits.<a href="./src/resources/credits.ts">retrieve</a>() -> CreditRetrieveResponse</code>
- <code title="post /v1/credits/migrate">client.credits.<a href="./src/resources/credits.ts">migrate</a>({ ...params }) -> CreditMigrateResponse</code>

# Inference

Types:

- <code><a href="./src/resources/inference/inference.ts">InferenceCheckHealthResponse</a></code>

Methods:

- <code title="get /v1/inference/health">client.inference.<a href="./src/resources/inference/inference.ts">checkHealth</a>() -> unknown</code>

## Batches

Types:

- <code><a href="./src/resources/inference/batches.ts">Batch</a></code>
- <code><a href="./src/resources/inference/batches.ts">BatchMetadata</a></code>
- <code><a href="./src/resources/inference/batches.ts">BatchRequest</a></code>
- <code><a href="./src/resources/inference/batches.ts">Price</a></code>
- <code><a href="./src/resources/inference/batches.ts">BatchCreateResponse</a></code>
- <code><a href="./src/resources/inference/batches.ts">BatchListResponse</a></code>

Methods:

- <code title="post /v1/inference/batches">client.inference.batches.<a href="./src/resources/inference/batches.ts">create</a>({ ...params }) -> BatchCreateResponse</code>
- <code title="get /v1/inference/batches/{batch_id}">client.inference.batches.<a href="./src/resources/inference/batches.ts">retrieve</a>(batchID) -> Batch</code>
- <code title="get /v1/inference/batches">client.inference.batches.<a href="./src/resources/inference/batches.ts">list</a>({ ...params }) -> BatchListResponse</code>
- <code title="post /v1/inference/batches/{batch_id}/cancel">client.inference.batches.<a href="./src/resources/inference/batches.ts">cancel</a>(batchID) -> Batch</code>

## Models

Types:

- <code><a href="./src/resources/inference/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v1/inference/models">client.inference.models.<a href="./src/resources/inference/models.ts">list</a>() -> ModelListResponse</code>
- <code title="get /v1/inference/models/{model_id}/history">client.inference.models.<a href="./src/resources/inference/models.ts">retrieveHistory</a>(modelID) -> void</code>
