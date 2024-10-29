## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,123,113|21564921|
|Object.create({})|2,149,608|1083924|
|Cached Empty.prototype|105,203,616|52614133|
|Empty.prototype|2,488,191|1256493|
|Empty class|1,689,430|844716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:20:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":43123113.586833276,"samples":21564921},{"name":"Object.create({})","opsSec":2149608.643744522,"samples":1083924},{"name":"Cached Empty.prototype","opsSec":105203616.37186961,"samples":52614133},{"name":"Empty.prototype","opsSec":2488191.441014962,"samples":1256493},{"name":"Empty class","opsSec":1689430.3612525493,"samples":844716}]}-->
