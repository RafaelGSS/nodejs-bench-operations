## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|70,373,555|35205350|
|Using dot notation|65,567,148|32790602|
|Using define property (writable)|4,380,990|2190656|
|Using define property initialized (writable)|5,847,392|2923698|
|Using define property (getter)|2,168,420|1084225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:01:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":35205350,"opsSec":70373555.00795437},{"name":"Using dot notation","samples":32790602,"opsSec":65567148.763722405},{"name":"Using define property (writable)","samples":2190656,"opsSec":4380990.890891661},{"name":"Using define property initialized (writable)","samples":2923698,"opsSec":5847392.994440001},{"name":"Using define property (getter)","samples":1084225,"opsSec":2168420.257947742}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.137ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.273ms
new Array(length)|10,000|0.297ms
array.push|1,000,000|36.94ms
new Array(length)|1,000,000|8.365ms
array.push|100,000,000|1,916.961ms
new Array(length)|100,000,000|4,821.271ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.004ms
array.push|100|0.013ms
new Array(length)|100|0.013ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.237ms
new Array(length)|10,000|0.165ms
array.push|1,000,000|26.881ms
new Array(length)|1,000,000|5.096ms
array.push|100,000,000|2,668.586ms
new Array(length)|100,000,000|4,442.547ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|224|113|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:10:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":113,"opsSec":224.74698476710483},{"name":"Array.from","samples":11,"opsSec":21.376689135205826}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,170|2095|
|new Blob (1024)|537|272|
|text (128)|4,416|2209|
|text (1024)|552|278|
|arrayBuffer (128)|4,462|2234|
|arrayBuffer (1024)|546|275|
|slice (0, 64)|58,316|29753|
|slice (0, 512)|24,695|12350|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:16:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2095,"opsSec":4170.476390213525},{"name":"new Blob (1024)","samples":272,"opsSec":537.9264797566884},{"name":"text (128)","samples":2209,"opsSec":4416.43505390439},{"name":"text (1024)","samples":278,"opsSec":552.8890514338505},{"name":"arrayBuffer (128)","samples":2234,"opsSec":4462.32641969694},{"name":"arrayBuffer (1024)","samples":275,"opsSec":546.6623421368367},{"name":"slice (0, 64)","samples":29753,"opsSec":58316.47089047497},{"name":"slice (0, 512)","samples":12350,"opsSec":24695.357618502727}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.04 ms|1|
|Gzip|135.54 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:19:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134036983},{"name":"Gzip","samples":1,"totalTime":0.135540509}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,779|3390|
|crypto.verify('RSA-SHA256')|6,602|3345|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:26:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3390,"opsSec":6779.248981239361},{"name":"crypto.verify('RSA-SHA256')","samples":3345,"opsSec":6602.18838563941}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,459,202|730320|
|fromUnixToISOString(new Date())|2,099,626|1049867|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:30:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":730320,"opsSec":1459202.8981889072},{"name":"fromUnixToISOString(new Date())","samples":1049867,"opsSec":2099626.8308473}]}-->
