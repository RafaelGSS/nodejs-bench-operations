## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|92,905,218|46464710|
|Using dot notation|63,040,569|31593851|
|Using define property (writable)|4,881,894|2442620|
|Using define property initialized (writable)|6,915,452|3458194|
|Using define property (getter)|2,304,386|1152194|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":46464710,"opsSec":92905218.37642337},{"name":"Using dot notation","samples":31593851,"opsSec":63040569.59731859},{"name":"Using define property (writable)","samples":2442620,"opsSec":4881894.291385285},{"name":"Using define property initialized (writable)","samples":3458194,"opsSec":6915452.532904969},{"name":"Using define property (getter)","samples":1152194,"opsSec":2304386.9215469207}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.031ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.346ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|30.039ms
new Array(length)|1,000,000|9.564ms
array.push|10,000,000|246.976ms
new Array(length)|10,000,000|69.032ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.014ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.463ms
new Array(length)|10,000|0.215ms
array.push|1,000,000|18.415ms
new Array(length)|1,000,000|12.742ms
array.push|10,000,000|360.872ms
new Array(length)|10,000,000|52.976ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|275|138|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:20:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":138,"opsSec":275.2586200842169},{"name":"Array.from","samples":11,"opsSec":21.498426531139387}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,567|2302|
|new Blob (1024)|585|293|
|text (128)|4,365|2184|
|text (1024)|541|272|
|arrayBuffer (128)|4,336|2181|
|arrayBuffer (1024)|538|270|
|slice (0, 64)|148,461|83179|
|slice (0, 512)|31,813|15910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:28:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2302,"opsSec":4567.894095197004},{"name":"new Blob (1024)","samples":293,"opsSec":585.2618396752333},{"name":"text (128)","samples":2184,"opsSec":4365.373590440806},{"name":"text (1024)","samples":272,"opsSec":541.8718093063853},{"name":"arrayBuffer (128)","samples":2181,"opsSec":4336.1007132613295},{"name":"arrayBuffer (1024)","samples":270,"opsSec":538.0870467401342},{"name":"slice (0, 64)","samples":83179,"opsSec":148461.90360444758},{"name":"slice (0, 512)","samples":15910,"opsSec":31813.983275854902}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.61 ms|1|
|Gzip|134.99 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:37:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133605855},{"name":"Gzip","samples":1,"totalTime":0.134992969}]}-->
