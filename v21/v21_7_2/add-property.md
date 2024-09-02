## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|14,932,250|7466126|
|Using dot notation|13,966,219|6983110|
|Using define property (writable)|3,120,230|1560116|
|Using define property initialized (writable)|3,778,930|1889466|
|Using define property (getter)|1,673,887|836944|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:20:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":14932250.626255834,"samples":7466126},{"name":"Using dot notation","opsSec":13966219.608990937,"samples":6983110},{"name":"Using define property (writable)","opsSec":3120230.1840278925,"samples":1560116},{"name":"Using define property initialized (writable)","opsSec":3778930.8965389645,"samples":1889466},{"name":"Using define property (getter)","opsSec":1673887.5279614015,"samples":836944}]}-->
