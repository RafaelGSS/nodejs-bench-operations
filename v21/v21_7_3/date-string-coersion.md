## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|911,226|455614|
|Using brackets {}|910,457|455233|
|Using '' + |1,090,541|545271|
|Using date.toString()|1,165,321|582970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:33:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":911226.4199333878,"samples":455614},{"name":"Using brackets {}","opsSec":910457.8368350349,"samples":455233},{"name":"Using '' + ","opsSec":1090541.6706564156,"samples":545271},{"name":"Using date.toString()","opsSec":1165321.2144351348,"samples":582970}]}-->
