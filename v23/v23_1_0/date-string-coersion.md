## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,027,448|513860|
|Using brackets {}|1,049,601|524820|
|Using '' + |1,033,762|516882|
|Using date.toString()|1,149,814|575204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:35:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1027448.9260949306,"samples":513860},{"name":"Using brackets {}","opsSec":1049601.4922204535,"samples":524820},{"name":"Using '' + ","opsSec":1033762.1392281494,"samples":516882},{"name":"Using date.toString()","opsSec":1149814.7806594735,"samples":575204}]}-->
