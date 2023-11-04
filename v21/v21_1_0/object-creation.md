## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|82,922,787|89|
|Object.create({})|2,407,396|82|
|Cached Empty.prototype|823,094,236|96|
|Empty.prototype|2,466,289|90|
|Empty class|1,532,782|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:23:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Object.create(null)","opsSec":82922786.97740807,"samples":5},{"name":"Object.create({})","opsSec":2407395.8418029076,"samples":3},{"name":"Cached Empty.prototype","opsSec":823094236.4460421,"samples":8},{"name":"Empty.prototype","opsSec":2466289.4266340137,"samples":4},{"name":"Empty class","opsSec":1532781.72967432,"samples":3}]}-->
