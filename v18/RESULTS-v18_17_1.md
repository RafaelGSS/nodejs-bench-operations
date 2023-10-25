## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|676,510,527|88|
|Using dot notation|569,137,610|88|
|Using define property (writable)|2,212,049|87|
|Using define property initialized (writable)|2,958,175|90|
|Using define property (getter)|1,147,178|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":676510526.9449942,"samples":6},{"name":"Using dot notation","opsSec":569137609.851336,"samples":7},{"name":"Using define property (writable)","opsSec":2212049.0427864045,"samples":8},{"name":"Using define property initialized (writable)","opsSec":2958174.7331113685,"samples":7},{"name":"Using define property (getter)","opsSec":1147178.0353662486,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.031ms
new Array(length)|100|0.01ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.385ms
new Array(length)|10,000|0.209ms
array.push|1,000,000|38.318ms
new Array(length)|1,000,000|6.077ms
array.push|100,000,000|1,562.501ms
new Array(length)|100,000,000|4,233.373ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.061ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.658ms
new Array(length)|10,000|4.344ms
array.push|1,000,000|336.173ms
new Array(length)|1,000,000|4.329ms
array.push|100,000,000|2,123.57ms
new Array(length)|100,000,000|4,794.247ms
