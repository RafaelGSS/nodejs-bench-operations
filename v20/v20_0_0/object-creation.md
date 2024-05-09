## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,108,388|6554195|
|Object.create({})|1,961,994|980998|
|Cached Empty.prototype|15,908,280|7954141|
|Empty.prototype|1,711,176|855590|
|Empty class|1,171,212|585607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:04:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13108388.856146257,"samples":6554195},{"name":"Object.create({})","opsSec":1961994.7660069007,"samples":980998},{"name":"Cached Empty.prototype","opsSec":15908280.854565427,"samples":7954141},{"name":"Empty.prototype","opsSec":1711176.436735392,"samples":855590},{"name":"Empty class","opsSec":1171212.9383336087,"samples":585607}]}-->
