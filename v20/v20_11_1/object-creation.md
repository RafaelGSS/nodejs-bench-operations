## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|84,774,603|92|
|Object.create({})|2,413,505|82|
|Cached Empty.prototype|841,532,221|99|
|Empty.prototype|2,441,979|87|
|Empty class|1,405,406|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:59:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Object.create(null)","opsSec":84774603.21721475,"samples":5},{"name":"Object.create({})","opsSec":2413505.1002787007,"samples":3},{"name":"Cached Empty.prototype","opsSec":841532221.4716969,"samples":8},{"name":"Empty.prototype","opsSec":2441979.17757374,"samples":5},{"name":"Empty class","opsSec":1405405.7449573213,"samples":4}]}-->
