## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|55,088,161|86|
|Object.create({})|1,038,426|82|
|Cached Empty.prototype|593,529,279|99|
|Empty.prototype|1,138,005|83|
|Empty class|655,268|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":55088161.34340329,"samples":6},{"name":"Object.create({})","opsSec":1038425.5760410905,"samples":3},{"name":"Cached Empty.prototype","opsSec":593529278.6239476,"samples":9},{"name":"Empty.prototype","opsSec":1138004.6560157628,"samples":4},{"name":"Empty class","opsSec":655268.3813618484,"samples":3}]}-->
