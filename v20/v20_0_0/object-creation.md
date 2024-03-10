## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|88,030,056|93|
|Object.create({})|2,442,771|78|
|Cached Empty.prototype|826,564,084|100|
|Empty.prototype|2,450,604|79|
|Empty class|1,524,021|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":88030056.17338052,"samples":7},{"name":"Object.create({})","opsSec":2442770.9522424657,"samples":3},{"name":"Cached Empty.prototype","opsSec":826564083.8375082,"samples":6},{"name":"Empty.prototype","opsSec":2450604.4516225234,"samples":3},{"name":"Empty class","opsSec":1524021.338425353,"samples":3}]}-->
