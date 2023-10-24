## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,978,789|81|
|Object.create({})|812,252|72|
|Cached Empty.prototype|589,622,881|92|
|Empty.prototype|849,145|75|
|Empty class|597,823|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":35978788.59848743,"samples":6},{"name":"Object.create({})","opsSec":812251.8950932032,"samples":3},{"name":"Cached Empty.prototype","opsSec":589622880.6374791,"samples":7},{"name":"Empty.prototype","opsSec":849145.3180318509,"samples":3},{"name":"Empty class","opsSec":597822.5852783542,"samples":3}]}-->
