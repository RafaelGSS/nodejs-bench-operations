## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,169,120|6584561|
|Object.create({})|2,311,207|1155604|
|Cached Empty.prototype|15,993,734|7996868|
|Empty.prototype|2,188,962|1099155|
|Empty class|1,234,819|617410|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:08:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13169120.867450844,"samples":6584561},{"name":"Object.create({})","opsSec":2311207.69492207,"samples":1155604},{"name":"Cached Empty.prototype","opsSec":15993734.304680694,"samples":7996868},{"name":"Empty.prototype","opsSec":2188962.9138413616,"samples":1099155},{"name":"Empty class","opsSec":1234819.199836389,"samples":617410}]}-->
