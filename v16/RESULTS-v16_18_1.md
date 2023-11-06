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

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|641,493,858|92|
|[async] async function|7,492,959|81|
|[async] function|182,106|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"function","opsSec":641493858.3477589,"samples":6},{"name":"[async] async function","opsSec":7492959.315056846,"samples":7},{"name":"[async] function","opsSec":182105.62054086084,"samples":3}]}-->
