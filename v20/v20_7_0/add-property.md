## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|708,220,357|97|
|Using dot notation|710,056,945|96|
|Using define property (writable)|3,156,237|96|
|Using define property initialized (writable)|4,149,693|93|
|Using define property (getter)|1,660,135|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":708220356.5698638,"samples":8},{"name":"Using dot notation","opsSec":710056945.3565415,"samples":6},{"name":"Using define property (writable)","opsSec":3156236.9569961936,"samples":6},{"name":"Using define property initialized (writable)","opsSec":4149693.441426524,"samples":6},{"name":"Using define property (getter)","opsSec":1660134.9350095561,"samples":4}]}-->
