## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|77,851,271|39031866|
|Using dot notation|78,379,137|39189578|
|Using define property (writable)|4,964,864|2482434|
|Using define property initialized (writable)|6,984,363|3492528|
|Using define property (getter)|2,311,256|1155808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:50:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":39031866,"opsSec":77851271.36507098},{"name":"Using dot notation","samples":39189578,"opsSec":78379137.50252356},{"name":"Using define property (writable)","samples":2482434,"opsSec":4964864.604032611},{"name":"Using define property initialized (writable)","samples":3492528,"opsSec":6984363.444489571},{"name":"Using define property (getter)","samples":1155808,"opsSec":2311256.830688511}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.008ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.457ms
new Array(length)|10,000|0.253ms
array.push|1,000,000|28.209ms
new Array(length)|1,000,000|7.835ms
array.push|10,000,000|238.906ms
new Array(length)|10,000,000|68.185ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.383ms
new Array(length)|10,000|0.13ms
array.push|1,000,000|18.097ms
new Array(length)|1,000,000|11.014ms
array.push|10,000,000|360.993ms
new Array(length)|10,000,000|51.209ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|152|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:56:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":152,"opsSec":303.8404952859137},{"name":"Array.from","samples":12,"opsSec":23.77727880013384}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,998|2500|
|new Blob (1024)|672|343|
|text (128)|4,705|2358|
|text (1024)|581|291|
|arrayBuffer (128)|4,692|2347|
|arrayBuffer (1024)|580|292|
|slice (0, 64)|153,435|85077|
|slice (0, 512)|31,069|15539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:02:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2500,"opsSec":4998.84487692353},{"name":"new Blob (1024)","samples":343,"opsSec":672.9868833482992},{"name":"text (128)","samples":2358,"opsSec":4705.883517496495},{"name":"text (1024)","samples":291,"opsSec":581.6219992097376},{"name":"arrayBuffer (128)","samples":2347,"opsSec":4692.677443945264},{"name":"arrayBuffer (1024)","samples":292,"opsSec":580.9798691072251},{"name":"slice (0, 64)","samples":85077,"opsSec":153435.5149983608},{"name":"slice (0, 512)","samples":15539,"opsSec":31069.20902944354}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.97 ms|1|
|Gzip|136.11 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:10:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133966635},{"name":"Gzip","samples":1,"totalTime":0.136114862}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,444|10723|
|crypto.verify('RSA-SHA256')|21,578|10804|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:14:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10723,"opsSec":21444.153872793093},{"name":"crypto.verify('RSA-SHA256')","samples":10804,"opsSec":21578.621440581774}]}-->
