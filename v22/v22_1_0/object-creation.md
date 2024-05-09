## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,054,023|6527012|
|Object.create({})|1,757,414|878708|
|Cached Empty.prototype|16,003,245|8001623|
|Empty.prototype|2,494,645|1247323|
|Empty class|1,569,417|784709|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:08:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13054023.0862287,"samples":6527012},{"name":"Object.create({})","opsSec":1757414.9771822381,"samples":878708},{"name":"Cached Empty.prototype","opsSec":16003245.071831558,"samples":8001623},{"name":"Empty.prototype","opsSec":2494645.4860982546,"samples":1247323},{"name":"Empty class","opsSec":1569417.3942054058,"samples":784709}]}-->
