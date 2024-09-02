## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|14,176,365|7088183|
|Using dot notation|13,917,893|6958947|
|Using define property (writable)|3,350,433|1675217|
|Using define property initialized (writable)|4,112,435|2056218|
|Using define property (getter)|2,032,989|1016495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:23:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":14176365.007658187,"samples":7088183},{"name":"Using dot notation","opsSec":13917893.610262696,"samples":6958947},{"name":"Using define property (writable)","opsSec":3350433.557746716,"samples":1675217},{"name":"Using define property initialized (writable)","opsSec":4112435.909550317,"samples":2056218},{"name":"Using define property (getter)","opsSec":2032989.4307593498,"samples":1016495}]}-->
