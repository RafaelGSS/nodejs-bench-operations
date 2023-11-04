## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|81,676,231|94|
|Object.create({})|2,492,941|80|
|Cached Empty.prototype|821,181,741|99|
|Empty.prototype|2,506,013|91|
|Empty class|1,519,672|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:23:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Object.create(null)","opsSec":81676231.47857925,"samples":5},{"name":"Object.create({})","opsSec":2492940.6821776815,"samples":3},{"name":"Cached Empty.prototype","opsSec":821181740.9949559,"samples":7},{"name":"Empty.prototype","opsSec":2506013.053669825,"samples":4},{"name":"Empty class","opsSec":1519672.4015344377,"samples":4}]}-->
