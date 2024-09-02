## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|14,725,300|7362651|
|Using dot notation|13,790,698|6895350|
|Using define property (writable)|3,092,854|1546428|
|Using define property initialized (writable)|3,719,171|1859586|
|Using define property (getter)|1,715,561|857781|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:21:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":14725300.321357463,"samples":7362651},{"name":"Using dot notation","opsSec":13790698.538083564,"samples":6895350},{"name":"Using define property (writable)","opsSec":3092854.985548825,"samples":1546428},{"name":"Using define property initialized (writable)","opsSec":3719171.3602958424,"samples":1859586},{"name":"Using define property (getter)","opsSec":1715561.6363043177,"samples":857781}]}-->
