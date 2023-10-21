## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|704,846,545|88|
|Using dot notation|734,876,826|90|
|Using define property (writable)|3,039,995|87|
|Using define property initialized (writable)|3,887,922|91|
|Using define property (getter)|1,588,909|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":704846545.0248468,"samples":7},{"name":"Using dot notation","opsSec":734876826.1622161,"samples":7},{"name":"Using define property (writable)","opsSec":3039995.3075123616,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3887921.8905846537,"samples":5},{"name":"Using define property (getter)","opsSec":1588908.5622752304,"samples":4}]}-->
