## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,060,394|93|
|Object.create({})|1,510,157|87|
|Cached Empty.prototype|822,586,919|95|
|Empty.prototype|1,707,766|83|
|Empty class|1,086,890|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":77060394.26741771,"samples":7},{"name":"Object.create({})","opsSec":1510157.016759821,"samples":3},{"name":"Cached Empty.prototype","opsSec":822586919.1236625,"samples":7},{"name":"Empty.prototype","opsSec":1707765.8310936126,"samples":4},{"name":"Empty class","opsSec":1086889.680358634,"samples":3}]}-->
