## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,764,643|5882322|
|Object.create({})|1,940,393|970197|
|Cached Empty.prototype|14,098,869|7049435|
|Empty.prototype|1,920,560|960281|
|Empty class|1,177,393|588697|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:05:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11764643.764687058,"samples":5882322},{"name":"Object.create({})","opsSec":1940393.3441500042,"samples":970197},{"name":"Cached Empty.prototype","opsSec":14098869.492363848,"samples":7049435},{"name":"Empty.prototype","opsSec":1920560.790040731,"samples":960281},{"name":"Empty class","opsSec":1177393.3406633353,"samples":588697}]}-->
