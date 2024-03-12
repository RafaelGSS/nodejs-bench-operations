## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|76,735,282|86|
|Object.create({})|2,026,625|85|
|Cached Empty.prototype|818,426,937|97|
|Empty.prototype|2,166,140|81|
|Empty class|1,305,253|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":76735282.1292372,"samples":4},{"name":"Object.create({})","opsSec":2026625.2893820798,"samples":3},{"name":"Cached Empty.prototype","opsSec":818426936.5027847,"samples":6},{"name":"Empty.prototype","opsSec":2166140.204868909,"samples":3},{"name":"Empty class","opsSec":1305252.6974477344,"samples":3}]}-->
