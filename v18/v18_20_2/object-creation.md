## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|85,404,110|93|
|Object.create({})|1,729,813|91|
|Cached Empty.prototype|909,969,342|97|
|Empty.prototype|1,838,373|87|
|Empty class|1,168,841|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:46:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":85404109.64765747,"samples":5},{"name":"Object.create({})","opsSec":1729813.3424350305,"samples":3},{"name":"Cached Empty.prototype","opsSec":909969342.3505026,"samples":6},{"name":"Empty.prototype","opsSec":1838373.32985113,"samples":3},{"name":"Empty class","opsSec":1168841.154956424,"samples":3}]}-->
