## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,693,359|6346680|
|Object.create({})|2,078,476|1042807|
|Cached Empty.prototype|15,171,541|7585771|
|Empty.prototype|1,963,651|982858|
|Empty class|1,350,605|675303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:07:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12693359.746127559,"samples":6346680},{"name":"Object.create({})","opsSec":2078476.8223628765,"samples":1042807},{"name":"Cached Empty.prototype","opsSec":15171541.817976512,"samples":7585771},{"name":"Empty.prototype","opsSec":1963651.1148187697,"samples":982858},{"name":"Empty class","opsSec":1350605.1248086097,"samples":675303}]}-->
