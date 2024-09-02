## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,898,575|8949288|
|Using dot notation|16,941,992|8470997|
|Using define property (writable)|3,320,543|1660272|
|Using define property initialized (writable)|4,123,583|2061792|
|Using define property (getter)|1,838,887|919444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:19:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":17898575.248280033,"samples":8949288},{"name":"Using dot notation","opsSec":16941992.37344935,"samples":8470997},{"name":"Using define property (writable)","opsSec":3320543.9468424316,"samples":1660272},{"name":"Using define property initialized (writable)","opsSec":4123583.7031132737,"samples":2061792},{"name":"Using define property (getter)","opsSec":1838887.5586644416,"samples":919444}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.091ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.275ms
new Array(length)|10,000|0.305ms
array.push|1,000,000|30.047ms
new Array(length)|1,000,000|7.305ms
array.push|100,000,000|1,812.531ms
new Array(length)|100,000,000|4,505.19ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.011ms
new Array(length)|100|0.013ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.236ms
new Array(length)|10,000|0.162ms
array.push|1,000,000|26.085ms
new Array(length)|1,000,000|4.555ms
array.push|100,000,000|2,525.456ms
new Array(length)|100,000,000|4,135.22ms
