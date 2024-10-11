## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,674,655|20839274|
|Object.create({})|2,002,583|1001292|
|Cached Empty.prototype|81,219,550|40610019|
|Empty.prototype|2,563,733|1282335|
|Empty class|1,556,049|778071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:13:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Object.create(null)","opsSec":41674655.920534275,"samples":20839274},{"name":"Object.create({})","opsSec":2002583.0387601415,"samples":1001292},{"name":"Cached Empty.prototype","opsSec":81219550.19538152,"samples":40610019},{"name":"Empty.prototype","opsSec":2563733.2477635327,"samples":1282335},{"name":"Empty class","opsSec":1556049.35904536,"samples":778071}]}-->
