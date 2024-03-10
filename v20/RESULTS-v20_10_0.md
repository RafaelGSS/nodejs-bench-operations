## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,064,151|99|
|Using dot notation|843,427,170|98|
|Using define property (writable)|4,236,892|92|
|Using define property initialized (writable)|6,193,798|96|
|Using define property (getter)|2,356,714|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":848064150.7195677,"samples":8},{"name":"Using dot notation","opsSec":843427170.3590678,"samples":8},{"name":"Using define property (writable)","opsSec":4236891.778481218,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6193797.802056683,"samples":5},{"name":"Using define property (getter)","opsSec":2356714.246597577,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.016ms
new Array(length)|10|0.002ms
array.push|100|0.028ms
new Array(length)|100|0.008ms
array.push|1,000|0.05ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.366ms
new Array(length)|10,000|0.405ms
array.push|1,000,000|26.786ms
new Array(length)|1,000,000|5.548ms
array.push|100,000,000|1,087.118ms
new Array(length)|100,000,000|3,602.468ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.022ms
array.push|100|0.078ms
new Array(length)|100|0.011ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.248ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|22.01ms
new Array(length)|1,000,000|2.88ms
array.push|100,000,000|1,344.949ms
new Array(length)|100,000,000|3,521.819ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|616|72|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":615.6035807205033,"samples":2},{"name":"Array.from","opsSec":22.60583768410511,"samples":2}]}-->
