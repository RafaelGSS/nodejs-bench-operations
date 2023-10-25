## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|634,690|85|
|Using brackets {}|682,947|89|
|Using '' + |681,395|93|
|Using date.toString()|705,652|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:52:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":634690.330904808,"samples":4},{"name":"Using brackets {}","opsSec":682946.8282434036,"samples":7},{"name":"Using '' + ","opsSec":681395.0077900304,"samples":4},{"name":"Using date.toString()","opsSec":705651.7589311707,"samples":4}]}-->
