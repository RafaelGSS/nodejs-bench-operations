## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,354,657|52677580|
|Using dot notation|72,858,303|36505473|
|Using define property (writable)|4,933,376|2466690|
|Using define property initialized (writable)|6,866,553|3433432|
|Using define property (getter)|2,455,899|1227986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:45:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":105354657.66899224,"samples":52677580},{"name":"Using dot notation","opsSec":72858303.48270552,"samples":36505473},{"name":"Using define property (writable)","opsSec":4933376.793305084,"samples":2466690},{"name":"Using define property initialized (writable)","opsSec":6866553.769100712,"samples":3433432},{"name":"Using define property (getter)","opsSec":2455899.742517776,"samples":1227986}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.006ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.263ms
new Array(length)|10,000|0.136ms
array.push|1,000,000|28.305ms
new Array(length)|1,000,000|7.137ms
array.push|100,000,000|1,851.871ms
new Array(length)|100,000,000|3,945.689ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|18.209ms
new Array(length)|10,000|6.65ms
array.push|1,000,000|142.99ms
new Array(length)|1,000,000|7.163ms
array.push|100,000,000|1,979.962ms
new Array(length)|100,000,000|4,548.412ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|332|167|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:59:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":332.7602491157997,"samples":167},{"name":"Array.from","opsSec":24.69608733714296,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,567|2284|
|new Blob (1024)|625|315|
|text (128)|3,738|1871|
|text (1024)|536|275|
|arrayBuffer (128)|4,329|2179|
|arrayBuffer (1024)|537|269|
|slice (0, 64)|146,774|77711|
|slice (0, 512)|31,704|15853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:05:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4567.2908184854505,"samples":2284},{"name":"new Blob (1024)","opsSec":625.721714129238,"samples":315},{"name":"text (128)","opsSec":3738.440234777803,"samples":1871},{"name":"text (1024)","opsSec":536.4502379639611,"samples":275},{"name":"arrayBuffer (128)","opsSec":4329.035411084507,"samples":2179},{"name":"arrayBuffer (1024)","opsSec":537.3876929392374,"samples":269},{"name":"slice (0, 64)","opsSec":146774.1617905084,"samples":77711},{"name":"slice (0, 512)","opsSec":31704.75451042381,"samples":15853}]}-->
