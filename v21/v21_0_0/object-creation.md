## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,985,759|5992880|
|Object.create({})|1,727,846|887116|
|Cached Empty.prototype|16,465,438|8232720|
|Empty.prototype|1,860,953|930477|
|Empty class|1,239,762|619882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:57:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":11985759.252417807,"samples":5992880},{"name":"Object.create({})","opsSec":1727846.540133678,"samples":887116},{"name":"Cached Empty.prototype","opsSec":16465438.280343432,"samples":8232720},{"name":"Empty.prototype","opsSec":1860953.6447150302,"samples":930477},{"name":"Empty class","opsSec":1239762.7314362484,"samples":619882}]}-->
