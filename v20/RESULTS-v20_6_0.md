## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|850,336,111|95|
|Using dot notation|850,144,899|100|
|Using define property (writable)|4,754,885|94|
|Using define property initialized (writable)|6,321,164|93|
|Using define property (getter)|2,447,974|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:55:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":850336110.6711495,"samples":9},{"name":"Using dot notation","opsSec":850144899.0412674,"samples":9},{"name":"Using define property (writable)","opsSec":4754884.788530899,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6321164.196122331,"samples":5},{"name":"Using define property (getter)","opsSec":2447974.4092947375,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.004ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.319ms
new Array(length)|10,000|0.331ms
array.push|1,000,000|29.26ms
new Array(length)|1,000,000|6.858ms
array.push|100,000,000|1,768.239ms
new Array(length)|100,000,000|4,432.133ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.239ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|24.109ms
new Array(length)|1,000,000|4.758ms
array.push|100,000,000|2,518.387ms
new Array(length)|100,000,000|4,120.951ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|278|83|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:09:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":277.6934202080662,"samples":3},{"name":"Array.from","opsSec":22.63279718575523,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|850,896,322|97|
|[async] async function|16,496,100|87|
|[async] function|174,420|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:16:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":850896321.6271836,"samples":6},{"name":"[async] async function","opsSec":16496100.290324237,"samples":8},{"name":"[async] function","opsSec":174420.32095823926,"samples":3}]}-->
