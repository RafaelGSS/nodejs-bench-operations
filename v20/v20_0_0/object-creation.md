## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,569,620|6784811|
|Object.create({})|1,987,577|993789|
|Cached Empty.prototype|16,088,374|8044188|
|Empty.prototype|1,679,925|839963|
|Empty class|1,313,513|656757|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:56:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13569620.863011925,"samples":6784811},{"name":"Object.create({})","opsSec":1987577.1798513844,"samples":993789},{"name":"Cached Empty.prototype","opsSec":16088374.231801163,"samples":8044188},{"name":"Empty.prototype","opsSec":1679925.492349639,"samples":839963},{"name":"Empty class","opsSec":1313513.6994755636,"samples":656757}]}-->
