## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|85,987,974|91|
|Object.create({})|1,742,524|86|
|Cached Empty.prototype|909,254,872|97|
|Empty.prototype|1,837,632|87|
|Empty class|1,183,291|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:45:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":85987973.66602042,"samples":5},{"name":"Object.create({})","opsSec":1742523.9726024591,"samples":4},{"name":"Cached Empty.prototype","opsSec":909254872.1831908,"samples":7},{"name":"Empty.prototype","opsSec":1837632.2003843712,"samples":3},{"name":"Empty class","opsSec":1183290.9023844937,"samples":3}]}-->
