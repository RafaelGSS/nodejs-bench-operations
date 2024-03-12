## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|80,151,309|96|
|Object.create({})|1,498,227|80|
|Cached Empty.prototype|817,297,213|97|
|Empty.prototype|1,682,609|87|
|Empty class|1,102,715|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Object.create(null)","opsSec":80151309.23055035,"samples":5},{"name":"Object.create({})","opsSec":1498226.6534553966,"samples":3},{"name":"Cached Empty.prototype","opsSec":817297212.7744421,"samples":7},{"name":"Empty.prototype","opsSec":1682608.6802692087,"samples":5},{"name":"Empty class","opsSec":1102715.1737141376,"samples":3}]}-->
