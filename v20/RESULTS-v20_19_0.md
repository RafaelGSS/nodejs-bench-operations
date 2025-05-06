## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,518,344|37760908|
|Using dot notation|65,898,271|32950559|
|Using define property (writable)|4,409,409|2204710|
|Using define property initialized (writable)|5,890,074|2945568|
|Using define property (getter)|2,215,812|1108963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37760908,"opsSec":75518344.11964744},{"name":"Using dot notation","samples":32950559,"opsSec":65898271.721847795},{"name":"Using define property (writable)","samples":2204710,"opsSec":4409409.946545322},{"name":"Using define property initialized (writable)","samples":2945568,"opsSec":5890074.149212528},{"name":"Using define property (getter)","samples":1108963,"opsSec":2215812.947593664}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.004ms
array.push|100|0.119ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.274ms
new Array(length)|10,000|0.3ms
array.push|1,000,000|38.049ms
new Array(length)|1,000,000|9.295ms
array.push|100,000,000|1,955.267ms
new Array(length)|100,000,000|4,863.588ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.232ms
new Array(length)|10,000|0.168ms
array.push|1,000,000|24.928ms
new Array(length)|1,000,000|5.159ms
array.push|100,000,000|2,702.877ms
new Array(length)|100,000,000|4,482.771ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|238|120|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:12:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":120,"opsSec":238.56348899675208},{"name":"Array.from","samples":11,"opsSec":21.50217119639713}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,361|2194|
|new Blob (1024)|538|273|
|text (128)|4,582|2297|
|text (1024)|575|289|
|arrayBuffer (128)|4,575|2297|
|arrayBuffer (1024)|567|284|
|slice (0, 64)|56,456|29234|
|slice (0, 512)|24,793|12399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2194,"opsSec":4361.873381674646},{"name":"new Blob (1024)","samples":273,"opsSec":538.7344451800592},{"name":"text (128)","samples":2297,"opsSec":4582.218355958583},{"name":"text (1024)","samples":289,"opsSec":575.2387321351401},{"name":"arrayBuffer (128)","samples":2297,"opsSec":4575.103213292769},{"name":"arrayBuffer (1024)","samples":284,"opsSec":567.276679121093},{"name":"slice (0, 64)","samples":29234,"opsSec":56456.478044055606},{"name":"slice (0, 512)","samples":12399,"opsSec":24793.415598282216}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.81 ms|1|
|Gzip|135.60 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:18:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134807963},{"name":"Gzip","samples":1,"totalTime":0.135601805}]}-->
