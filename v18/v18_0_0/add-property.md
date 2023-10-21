## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|587,875,627|92|
|Using dot notation|597,973,412|100|
|Using define property (writable)|3,329,799|96|
|Using define property initialized (writable)|4,168,302|97|
|Using define property (getter)|1,612,933|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":587875627.0985748,"samples":6},{"name":"Using dot notation","opsSec":597973412.2828697,"samples":8},{"name":"Using define property (writable)","opsSec":3329799.358569805,"samples":6},{"name":"Using define property initialized (writable)","opsSec":4168302.1487322734,"samples":7},{"name":"Using define property (getter)","opsSec":1612933.3660592858,"samples":4}]}-->
