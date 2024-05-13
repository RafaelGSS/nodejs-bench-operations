## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,845,957|6922979|
|Using Object.getOwnPropertyNames()|13,919,605|6959803|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:00:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13845957.999990389,"samples":6922979},{"name":"Using Object.getOwnPropertyNames()","opsSec":13919605.053467827,"samples":6959803}]}-->
