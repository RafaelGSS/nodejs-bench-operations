## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|21,077,680|10538841|
|Using dot notation|20,427,981|10213991|
|Using define property (writable)|3,773,155|1886578|
|Using define property initialized (writable)|4,395,469|2197735|
|Using define property (getter)|2,186,446|1095586|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:23:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":21077680.41200185,"samples":10538841},{"name":"Using dot notation","opsSec":20427981.571403887,"samples":10213991},{"name":"Using define property (writable)","opsSec":3773155.010450718,"samples":1886578},{"name":"Using define property initialized (writable)","opsSec":4395469.320920915,"samples":2197735},{"name":"Using define property (getter)","opsSec":2186446.371546341,"samples":1095586}]}-->
