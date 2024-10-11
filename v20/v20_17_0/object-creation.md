## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,642,059|21821036|
|Object.create({})|1,865,570|956354|
|Cached Empty.prototype|116,228,912|58228115|
|Empty.prototype|2,199,115|1122259|
|Empty class|1,433,958|720981|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:31:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":43642059.95479146,"samples":21821036},{"name":"Object.create({})","opsSec":1865570.805288709,"samples":956354},{"name":"Cached Empty.prototype","opsSec":116228912.51485518,"samples":58228115},{"name":"Empty.prototype","opsSec":2199115.2555576684,"samples":1122259},{"name":"Empty class","opsSec":1433958.8890256921,"samples":720981}]}-->
