## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,191,485|18637203|
|Object.create({})|1,335,080|679791|
|new Function with empty prototype|111,252,411|55665544|
|Empty class|81,827,213|41077042|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:54:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18637203,"opsSec":37191485.129266284},{"name":"Object.create({})","samples":679791,"opsSec":1335080.629656321},{"name":"new Function with empty prototype","samples":55665544,"opsSec":111252411.85187212},{"name":"Empty class","samples":41077042,"opsSec":81827213.57590671}]}-->
