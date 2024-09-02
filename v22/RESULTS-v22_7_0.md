## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|13,954,545|6977273|
|Using dot notation|13,609,206|6804604|
|Using define property (writable)|3,239,014|1619508|
|Using define property initialized (writable)|4,059,012|2029507|
|Using define property (getter)|2,112,665|1056333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:23:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":13954545.10692932,"samples":6977273},{"name":"Using dot notation","opsSec":13609206.557391187,"samples":6804604},{"name":"Using define property (writable)","opsSec":3239014.9570253775,"samples":1619508},{"name":"Using define property initialized (writable)","opsSec":4059012.343906928,"samples":2029507},{"name":"Using define property (getter)","opsSec":2112665.116919486,"samples":1056333}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.076ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.131ms
array.push|1,000,000|27.375ms
new Array(length)|1,000,000|6.697ms
array.push|100,000,000|1,879.896ms
new Array(length)|100,000,000|4,006.083ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|158.577ms
new Array(length)|10,000|0.05ms
array.push|1,000,000|18.738ms
new Array(length)|1,000,000|7.031ms
array.push|100,000,000|2,025.084ms
new Array(length)|100,000,000|4,625.878ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|335|168|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:34:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":335.834667921311,"samples":168},{"name":"Array.from","opsSec":24.483773156161742,"samples":13}]}-->
