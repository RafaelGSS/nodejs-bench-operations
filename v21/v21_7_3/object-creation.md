## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,730,094|6365048|
|Object.create({})|1,997,213|998607|
|Cached Empty.prototype|15,129,515|7564758|
|Empty.prototype|1,963,099|981550|
|Empty class|1,243,609|621805|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12730094.548766183,"samples":6365048},{"name":"Object.create({})","opsSec":1997213.468740547,"samples":998607},{"name":"Cached Empty.prototype","opsSec":15129515.848706856,"samples":7564758},{"name":"Empty.prototype","opsSec":1963099.6387892512,"samples":981550},{"name":"Empty class","opsSec":1243609.5100185513,"samples":621805}]}-->
