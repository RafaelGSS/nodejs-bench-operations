## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|558,977,860|92|
|Using dot notation|565,307,941|93|
|Using define property (writable)|2,377,952|89|
|Using define property initialized (writable)|3,041,505|89|
|Using define property (getter)|1,315,047|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:50:42 GMT+0000 (Coordinated Universal Time)
</details>


## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.017ms
new Array(length)|10|0.004ms
array.push|100|0.059ms
new Array(length)|100|0.017ms
array.push|1,000|0.083ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.516ms
new Array(length)|10,000|1.676ms
array.push|1,000,000|47.172ms
new Array(length)|1,000,000|14.998ms
array.push|100,000,000|2,216.616ms
new Array(length)|100,000,000|6,878.959ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.025ms
array.push|100|0.037ms
new Array(length)|100|0.03ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.497ms
new Array(length)|10,000|0.371ms
array.push|1,000,000|38.013ms
new Array(length)|1,000,000|11.717ms
array.push|100,000,000|3,114.909ms
new Array(length)|100,000,000|6,896.814ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:23 GMT+0000 (Coordinated Universal Time)
</details>


## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|382|78|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:53:46 GMT+0000 (Coordinated Universal Time)
</details>


## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,319|89|
|new Blob (1024)|411|73|
|text (128)|28,302|63|
|text (1024)|19,530|86|
|arrayBuffer (128)|31,665|84|
|arrayBuffer (1024)|20,958|86|
|slice (0, 64)|62,838|78|
|slice (0, 512)|27,961|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:55:59 GMT+0000 (Coordinated Universal Time)
</details>


## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,449|50|
|[True conditional] Using constructor name|127,758|90|
|[True conditional] Check if property is valid then instanceof |128,501|93|
|[False conditional] Using instanceof only|598,110,072|94|
|[False conditional] Using constructor name|599,303,437|97|
|[False conditional] Check if property is valid then instanceof |596,832,428|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>


## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,891|87|
|crypto.verify('RSA-SHA256')|3,861|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:59:21 GMT+0000 (Coordinated Universal Time)
</details>


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|760,819|92|
|fromUnixToISOString(new Date())|1,213,500|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:00:41 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|789,970,949|78|
|Using dot notation|671,179,977|83|
|Using define property (writable)|2,596,022|86|
|Using define property initialized (writable)|3,176,243|91|
|Using define property (getter)|1,286,496|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|789,970,949|78|
|Using dot notation|671,179,977|83|
|Using define property (writable)|2,596,022|86|
|Using define property initialized (writable)|3,176,243|91|
|Using define property (getter)|1,286,496|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|789,970,949|78|
|Using dot notation|671,179,977|83|
|Using define property (writable)|2,596,022|86|
|Using define property initialized (writable)|3,176,243|91|
|Using define property (getter)|1,286,496|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|789,970,949|78|
|Using dot notation|671,179,977|83|
|Using define property (writable)|2,596,022|86|
|Using define property initialized (writable)|3,176,243|91|
|Using define property (getter)|1,286,496|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|789,970,949|78|
|Using dot notation|671,179,977|83|
|Using define property (writable)|2,596,022|86|
|Using define property initialized (writable)|3,176,243|91|
|Using define property (getter)|1,286,496|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|789,970,949|78|
|Using dot notation|671,179,977|83|
|Using define property (writable)|2,596,022|86|
|Using define property initialized (writable)|3,176,243|91|
|Using define property (getter)|1,286,496|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|789,970,949|78|
|Using dot notation|671,179,977|83|
|Using define property (writable)|2,596,022|86|
|Using define property initialized (writable)|3,176,243|91|
|Using define property (getter)|1,286,496|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|789,970,949|78|
|Using dot notation|671,179,977|83|
|Using define property (writable)|2,596,022|86|
|Using define property initialized (writable)|3,176,243|91|
|Using define property (getter)|1,286,496|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|789,970,949|78|
|Using dot notation|671,179,977|83|
|Using define property (writable)|2,596,022|86|
|Using define property initialized (writable)|3,176,243|91|
|Using define property (getter)|1,286,496|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|789,970,949|78|
|Using dot notation|671,179,977|83|
|Using define property (writable)|2,596,022|86|
|Using define property initialized (writable)|3,176,243|91|
|Using define property (getter)|1,286,496|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:03:03 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>


## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,688,203|85|
|Using parseInt(x, 10) - big number (10 len)|12,414,600|89|
|Using + - small number (2 len)|736,226,076|85|
|Using + - big number (10 len)|758,545,198|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:36:39 GMT+0000 (Coordinated Universal Time)
</details>

