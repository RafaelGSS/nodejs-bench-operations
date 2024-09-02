## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,084,133|7542069|
|Using dot notation|14,829,183|7414592|
|Using define property (writable)|2,843,328|1421665|
|Using define property initialized (writable)|3,627,291|1813646|
|Using define property (getter)|1,776,545|888273|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15084133.324458163,"samples":7542069},{"name":"Using dot notation","opsSec":14829183.377337873,"samples":7414592},{"name":"Using define property (writable)","opsSec":2843328.5726163415,"samples":1421665},{"name":"Using define property initialized (writable)","opsSec":3627291.0062555242,"samples":1813646},{"name":"Using define property (getter)","opsSec":1776545.928948273,"samples":888273}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.01ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.373ms
new Array(length)|10,000|0.139ms
array.push|1,000,000|25.492ms
new Array(length)|1,000,000|14.718ms
array.push|100,000,000|1,849.421ms
new Array(length)|100,000,000|4,115.064ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.015ms
new Array(length)|100|0.01ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.458ms
new Array(length)|10,000|3.268ms
array.push|1,000,000|254.166ms
new Array(length)|1,000,000|4.601ms
array.push|100,000,000|2,302.592ms
new Array(length)|100,000,000|4,408.589ms
