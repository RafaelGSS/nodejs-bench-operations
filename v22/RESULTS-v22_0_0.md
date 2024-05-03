## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|143,098,427|78|
|Using dot notation|147,078,262|85|
|Using define property (writable)|4,893,416|94|
|Using define property initialized (writable)|7,731,782|95|
|Using define property (getter)|2,701,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:21:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":143098426.87349737,"samples":7},{"name":"Using dot notation","opsSec":147078261.58979377,"samples":6},{"name":"Using define property (writable)","opsSec":4893416.468456979,"samples":5},{"name":"Using define property initialized (writable)","opsSec":7731782.219340368,"samples":4},{"name":"Using define property (getter)","opsSec":2701898.3411655263,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.065ms
new Array(length)|100|0.006ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.344ms
new Array(length)|10,000|0.145ms
array.push|1,000,000|29.25ms
new Array(length)|1,000,000|7.114ms
array.push|100,000,000|2,045.374ms
new Array(length)|100,000,000|4,048.018ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.496ms
new Array(length)|10,000|0.218ms
array.push|1,000,000|16.447ms
new Array(length)|1,000,000|7.332ms
array.push|100,000,000|2,602.481ms
new Array(length)|100,000,000|4,049.746ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|249|90|
|Array.from|24|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:34:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":249.44902195730054,"samples":3},{"name":"Array.from","opsSec":24.183456328477693,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|141,769,786|80|
|[async] async function|19,457,725|89|
|[async] function|202,792|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:40:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":141769785.730426,"samples":5},{"name":"[async] async function","opsSec":19457725.183432702,"samples":7},{"name":"[async] function","opsSec":202791.98093113885,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,550|84|
|new Blob (1024)|836|76|
|text (128)|6,774|87|
|text (1024)|859|89|
|arrayBuffer (128)|6,812|88|
|arrayBuffer (1024)|854|88|
|slice (0, 64)|244,497|57|
|slice (0, 512)|27,921|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:53:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6549.744270873954,"samples":5},{"name":"new Blob (1024)","opsSec":836.0468936761839,"samples":2},{"name":"text (128)","opsSec":6774.479261130344,"samples":4},{"name":"text (1024)","opsSec":859.493924981644,"samples":3},{"name":"arrayBuffer (128)","opsSec":6812.388310807467,"samples":5},{"name":"arrayBuffer (1024)","opsSec":853.5913088831454,"samples":2},{"name":"slice (0, 64)","opsSec":244497.2002909894,"samples":3},{"name":"slice (0, 512)","opsSec":27920.66685398821,"samples":4}]}-->
