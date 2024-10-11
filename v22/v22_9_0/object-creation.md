## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,700,742|20853128|
|Object.create({})|1,955,594|983746|
|Cached Empty.prototype|111,725,638|56052150|
|Empty.prototype|2,475,183|1243218|
|Empty class|1,558,774|780522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:32:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":41700742.828192174,"samples":20853128},{"name":"Object.create({})","opsSec":1955594.4139019058,"samples":983746},{"name":"Cached Empty.prototype","opsSec":111725638.57194684,"samples":56052150},{"name":"Empty.prototype","opsSec":2475183.114608983,"samples":1243218},{"name":"Empty class","opsSec":1558774.3808557913,"samples":780522}]}-->
