## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|584,769,095|97|
|Using dot notation|587,385,319|95|
|Using define property (writable)|2,480,600|94|
|Using define property initialized (writable)|3,068,573|91|
|Using define property (getter)|1,247,552|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":584769095.4796222,"samples":6},{"name":"Using dot notation","opsSec":587385319.2876967,"samples":7},{"name":"Using define property (writable)","opsSec":2480600.361643891,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3068573.0179144167,"samples":5},{"name":"Using define property (getter)","opsSec":1247552.0367843828,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.033ms
new Array(length)|100|0.015ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.238ms
array.push|1,000,000|46.204ms
new Array(length)|1,000,000|8.202ms
array.push|100,000,000|1,995.529ms
new Array(length)|100,000,000|4,837.198ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.064ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.603ms
new Array(length)|10,000|4.27ms
array.push|1,000,000|332.792ms
new Array(length)|1,000,000|4.542ms
array.push|100,000,000|2,706.794ms
new Array(length)|100,000,000|5,415.823ms
