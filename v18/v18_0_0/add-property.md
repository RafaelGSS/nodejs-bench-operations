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
