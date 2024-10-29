## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,867,993|44940659|
|Using dot notation|65,846,781|32926346|
|Using define property (writable)|4,737,823|2369075|
|Using define property initialized (writable)|7,038,125|3519082|
|Using define property (getter)|2,460,384|1230267|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:46:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":89867993.09292814,"samples":44940659},{"name":"Using dot notation","opsSec":65846781.197838984,"samples":32926346},{"name":"Using define property (writable)","opsSec":4737823.611331415,"samples":2369075},{"name":"Using define property initialized (writable)","opsSec":7038125.726672297,"samples":3519082},{"name":"Using define property (getter)","opsSec":2460384.270854813,"samples":1230267}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.071ms
new Array(length)|100|0.007ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.45ms
new Array(length)|10,000|0.291ms
array.push|1,000,000|26.339ms
new Array(length)|1,000,000|6.44ms
array.push|100,000,000|1,806.725ms
new Array(length)|100,000,000|3,999.16ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|153.664ms
new Array(length)|10,000|0.032ms
array.push|1,000,000|16.394ms
new Array(length)|1,000,000|9.022ms
array.push|100,000,000|1,964.952ms
new Array(length)|100,000,000|4,658.797ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|333|168|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:00:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":333.3525156540853,"samples":168},{"name":"Array.from","opsSec":23.582176885487158,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,811|2478|
|new Blob (1024)|609|305|
|text (128)|4,502|2256|
|text (1024)|576|289|
|arrayBuffer (128)|4,595|2301|
|arrayBuffer (1024)|576|290|
|slice (0, 64)|149,389|81730|
|slice (0, 512)|31,777|15892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:06:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4811.855778825577,"samples":2478},{"name":"new Blob (1024)","opsSec":609.2005668089959,"samples":305},{"name":"text (128)","opsSec":4502.817233708244,"samples":2256},{"name":"text (1024)","opsSec":576.7245690018558,"samples":289},{"name":"arrayBuffer (128)","opsSec":4595.186698301681,"samples":2301},{"name":"arrayBuffer (1024)","opsSec":576.1932994524917,"samples":290},{"name":"slice (0, 64)","opsSec":149389.67927701026,"samples":81730},{"name":"slice (0, 512)","opsSec":31777.616067597715,"samples":15892}]}-->
