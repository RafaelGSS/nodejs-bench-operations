## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|82,919,677|95|
|Object.create({})|2,478,189|77|
|Cached Empty.prototype|822,429,383|99|
|Empty.prototype|2,544,638|90|
|Empty class|1,518,125|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":82919677.10937494,"samples":5},{"name":"Object.create({})","opsSec":2478189.237413242,"samples":4},{"name":"Cached Empty.prototype","opsSec":822429383.1779258,"samples":7},{"name":"Empty.prototype","opsSec":2544638.0715606646,"samples":4},{"name":"Empty class","opsSec":1518125.3696933396,"samples":3}]}-->
