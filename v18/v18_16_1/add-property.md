## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|570,659,597|92|
|Using dot notation|585,830,378|92|
|Using define property (writable)|2,410,346|95|
|Using define property initialized (writable)|3,040,983|94|
|Using define property (getter)|1,267,524|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":570659597.1228856,"samples":7},{"name":"Using dot notation","opsSec":585830378.0294738,"samples":8},{"name":"Using define property (writable)","opsSec":2410345.531767152,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3040983.3671818683,"samples":6},{"name":"Using define property (getter)","opsSec":1267524.487084279,"samples":4}]}-->
