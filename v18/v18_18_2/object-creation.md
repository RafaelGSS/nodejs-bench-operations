## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,191,941|95|
|Object.create({})|1,007,562|79|
|Cached Empty.prototype|592,354,290|98|
|Empty.prototype|1,108,332|86|
|Empty class|702,014|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":57191941.282166794,"samples":6},{"name":"Object.create({})","opsSec":1007562.3703645556,"samples":3},{"name":"Cached Empty.prototype","opsSec":592354290.3938888,"samples":8},{"name":"Empty.prototype","opsSec":1108332.4446029272,"samples":4},{"name":"Empty class","opsSec":702013.9209451607,"samples":4}]}-->
