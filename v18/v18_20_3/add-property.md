## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,118,355|7559178|
|Using dot notation|14,837,241|7418621|
|Using define property (writable)|2,876,390|1438196|
|Using define property initialized (writable)|3,731,545|1865773|
|Using define property (getter)|1,814,600|909026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:16:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15118355.637695704,"samples":7559178},{"name":"Using dot notation","opsSec":14837241.080331914,"samples":7418621},{"name":"Using define property (writable)","opsSec":2876390.3489134163,"samples":1438196},{"name":"Using define property initialized (writable)","opsSec":3731545.2163310926,"samples":1865773},{"name":"Using define property (getter)","opsSec":1814600.347054544,"samples":909026}]}-->
