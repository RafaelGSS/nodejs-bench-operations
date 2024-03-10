## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|88,116,406|96|
|Object.create({})|2,490,525|83|
|Cached Empty.prototype|844,424,392|94|
|Empty.prototype|2,505,440|79|
|Empty class|1,434,010|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Object.create(null)","opsSec":88116405.56804898,"samples":5},{"name":"Object.create({})","opsSec":2490524.9567549382,"samples":4},{"name":"Cached Empty.prototype","opsSec":844424391.9971248,"samples":6},{"name":"Empty.prototype","opsSec":2505439.7673529848,"samples":3},{"name":"Empty class","opsSec":1434009.7988282198,"samples":5}]}-->
