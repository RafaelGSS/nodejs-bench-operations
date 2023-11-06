## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|846,272,049|96|
|Using dot notation|845,850,382|100|
|Using define property (writable)|4,567,266|93|
|Using define property initialized (writable)|5,822,557|96|
|Using define property (getter)|2,226,991|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:49:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":846272049.4379532,"samples":6},{"name":"Using dot notation","opsSec":845850381.52686,"samples":10},{"name":"Using define property (writable)","opsSec":4567266.093081193,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5822556.6862805225,"samples":6},{"name":"Using define property (getter)","opsSec":2226991.235838603,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.007ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.16ms
array.push|1,000,000|24.503ms
new Array(length)|1,000,000|14.718ms
array.push|100,000,000|1,828.186ms
new Array(length)|100,000,000|4,156.613ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.047ms
new Array(length)|100|0.008ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.408ms
new Array(length)|10,000|3.225ms
array.push|1,000,000|255.938ms
new Array(length)|1,000,000|4.854ms
array.push|100,000,000|2,194.785ms
new Array(length)|100,000,000|4,354.317ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|272|80|
|Array.from|20|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:06:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":271.63843911537884,"samples":2},{"name":"Array.from","opsSec":20.490238124600886,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,134,099|99|
|[async] async function|16,590,319|88|
|[async] function|346,177|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:13:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":846134098.5092406,"samples":6},{"name":"[async] async function","opsSec":16590318.608368358,"samples":6},{"name":"[async] function","opsSec":346177.01103227685,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,127|82|
|new Blob (1024)|527|69|
|text (128)|41,016|84|
|text (1024)|26,951|76|
|arrayBuffer (128)|49,883|90|
|arrayBuffer (1024)|31,164|75|
|slice (0, 64)|91,082|81|
|slice (0, 512)|46,664|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:22:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4127.2650144044765,"samples":3},{"name":"new Blob (1024)","opsSec":527.3554392487652,"samples":2},{"name":"text (128)","opsSec":41015.890718913404,"samples":4},{"name":"text (1024)","opsSec":26950.69474421623,"samples":5},{"name":"arrayBuffer (128)","opsSec":49882.7613558176,"samples":4},{"name":"arrayBuffer (1024)","opsSec":31163.737677527293,"samples":6},{"name":"slice (0, 64)","opsSec":91081.87251943086,"samples":3},{"name":"slice (0, 512)","opsSec":46664.30566869226,"samples":3}]}-->
