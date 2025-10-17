## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|71,335,616|35843576|
|Using dot notation|73,412,732|36786926|
|Using define property (writable)|4,955,154|2478274|
|Using define property initialized (writable)|6,819,212|3409612|
|Using define property (getter)|2,380,929|1195703|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:41:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":35843576,"opsSec":71335616.50208323},{"name":"Using dot notation","samples":36786926,"opsSec":73412732.34220125},{"name":"Using define property (writable)","samples":2478274,"opsSec":4955154.7888589455},{"name":"Using define property initialized (writable)","samples":3409612,"opsSec":6819212.270954894},{"name":"Using define property (getter)","samples":1195703,"opsSec":2380929.31103725}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.254ms
new Array(length)|10,000|0.138ms
array.push|1,000,000|28.735ms
new Array(length)|1,000,000|6.54ms
array.push|10,000,000|243.287ms
new Array(length)|10,000,000|63.264ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.02ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.32ms
new Array(length)|10,000|0.182ms
array.push|1,000,000|21.442ms
new Array(length)|1,000,000|12.402ms
array.push|10,000,000|216.404ms
new Array(length)|10,000,000|65.692ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|319|161|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:46:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":161,"opsSec":319.86084551264923},{"name":"Array.from","samples":13,"opsSec":24.092807436496322}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,917|2459|
|new Blob (1024)|594|298|
|text (128)|4,316|2166|
|text (1024)|542|272|
|arrayBuffer (128)|4,349|2176|
|arrayBuffer (1024)|546|274|
|slice (0, 64)|156,022|78014|
|slice (0, 512)|19,164|9694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2459,"opsSec":4917.951784400705},{"name":"new Blob (1024)","samples":298,"opsSec":594.7496304933309},{"name":"text (128)","samples":2166,"opsSec":4316.094535589981},{"name":"text (1024)","samples":272,"opsSec":542.7472319247657},{"name":"arrayBuffer (128)","samples":2176,"opsSec":4349.165127186797},{"name":"arrayBuffer (1024)","samples":274,"opsSec":546.4869459646034},{"name":"slice (0, 64)","samples":78014,"opsSec":156022.22811369316},{"name":"slice (0, 512)","samples":9694,"opsSec":19164.075898691968}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.49 ms|1|
|Gzip|135.46 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:55:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134491521},{"name":"Gzip","samples":1,"totalTime":0.135460783}]}-->
