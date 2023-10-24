## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,056,562|85|
|Object.create({})|801,872|69|
|Cached Empty.prototype|767,828,973|84|
|Empty.prototype|897,409|75|
|Empty class|641,563|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":38056562.1839283,"samples":6},{"name":"Object.create({})","opsSec":801872.4202583049,"samples":4},{"name":"Cached Empty.prototype","opsSec":767828972.6726581,"samples":6},{"name":"Empty.prototype","opsSec":897408.9312529226,"samples":3},{"name":"Empty class","opsSec":641563.3157596869,"samples":3}]}-->
