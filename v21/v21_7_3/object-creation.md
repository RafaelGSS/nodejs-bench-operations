## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|91,860,349|96|
|Object.create({})|2,924,902|84|
|Cached Empty.prototype|910,577,842|97|
|Empty.prototype|2,715,279|91|
|Empty class|1,730,037|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:51:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":91860348.98275596,"samples":5},{"name":"Object.create({})","opsSec":2924902.1091555287,"samples":3},{"name":"Cached Empty.prototype","opsSec":910577842.0354116,"samples":7},{"name":"Empty.prototype","opsSec":2715278.8162586843,"samples":3},{"name":"Empty class","opsSec":1730036.9936099562,"samples":3}]}-->
