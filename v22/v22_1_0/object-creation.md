## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,682,291|6341146|
|Object.create({})|1,855,623|927815|
|Cached Empty.prototype|15,903,108|7951555|
|Empty.prototype|2,485,954|1243363|
|Empty class|1,559,348|783380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:37:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12682291.340515934,"samples":6341146},{"name":"Object.create({})","opsSec":1855623.3308869004,"samples":927815},{"name":"Cached Empty.prototype","opsSec":15903108.250664674,"samples":7951555},{"name":"Empty.prototype","opsSec":2485954.1858023684,"samples":1243363},{"name":"Empty class","opsSec":1559348.4883652735,"samples":783380}]}-->
