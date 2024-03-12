## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|86,703,262|95|
|Object.create({})|2,395,528|82|
|Cached Empty.prototype|848,882,856|98|
|Empty.prototype|2,479,712|81|
|Empty class|1,503,940|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":86703261.5702655,"samples":6},{"name":"Object.create({})","opsSec":2395528.089156037,"samples":4},{"name":"Cached Empty.prototype","opsSec":848882855.7092237,"samples":7},{"name":"Empty.prototype","opsSec":2479712.0129024945,"samples":3},{"name":"Empty class","opsSec":1503940.3853559403,"samples":3}]}-->
