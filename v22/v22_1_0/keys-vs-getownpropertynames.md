## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,688,307|6844154|
|Using Object.getOwnPropertyNames()|13,773,536|6886769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:00:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13688307.178698104,"samples":6844154},{"name":"Using Object.getOwnPropertyNames()","opsSec":13773536.595105955,"samples":6886769}]}-->
