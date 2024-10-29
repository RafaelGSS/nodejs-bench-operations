## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,429,240|714714|
|fromUnixToISOString(new Date())|2,082,578|1041290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:20:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1429240.2064123186,"samples":714714},{"name":"fromUnixToISOString(new Date())","opsSec":2082578.1881569761,"samples":1041290}]}-->
