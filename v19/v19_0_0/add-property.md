## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,236,623|90|
|Using dot notation|594,536,832|88|
|Using define property (writable)|2,345,799|88|
|Using define property initialized (writable)|3,096,943|94|
|Using define property (getter)|1,245,901|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:48:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":714236623.2429363,"samples":7},{"name":"Using dot notation","opsSec":594536831.5429496,"samples":7},{"name":"Using define property (writable)","opsSec":2345799.3189762556,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3096943.1227315417,"samples":5},{"name":"Using define property (getter)","opsSec":1245901.1812531508,"samples":4}]}-->
