## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|88,027,015|89|
|Object.create({})|2,546,004|83|
|Cached Empty.prototype|818,840,969|98|
|Empty.prototype|2,440,176|88|
|Empty class|1,519,598|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":88027014.81950334,"samples":8},{"name":"Object.create({})","opsSec":2546004.0232429868,"samples":3},{"name":"Cached Empty.prototype","opsSec":818840969.0666947,"samples":6},{"name":"Empty.prototype","opsSec":2440176.421062614,"samples":4},{"name":"Empty class","opsSec":1519597.9402879775,"samples":3}]}-->
