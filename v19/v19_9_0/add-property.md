## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|577,993,303|91|
|Using dot notation|590,721,850|95|
|Using define property (writable)|2,503,263|96|
|Using define property initialized (writable)|3,119,896|96|
|Using define property (getter)|1,345,822|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":577993303.3189217,"samples":6},{"name":"Using dot notation","opsSec":590721850.3698547,"samples":6},{"name":"Using define property (writable)","opsSec":2503263.4774971125,"samples":8},{"name":"Using define property initialized (writable)","opsSec":3119895.6237798715,"samples":7},{"name":"Using define property (getter)","opsSec":1345821.7986416225,"samples":4}]}-->
