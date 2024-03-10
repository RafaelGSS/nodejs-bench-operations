## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|84,539,234|90|
|Object.create({})|2,431,421|80|
|Cached Empty.prototype|844,424,166|97|
|Empty.prototype|2,428,188|88|
|Empty class|1,498,807|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":84539234.1182379,"samples":6},{"name":"Object.create({})","opsSec":2431421.363400255,"samples":3},{"name":"Cached Empty.prototype","opsSec":844424166.2142707,"samples":7},{"name":"Empty.prototype","opsSec":2428188.330828481,"samples":5},{"name":"Empty class","opsSec":1498806.6242188942,"samples":3}]}-->
