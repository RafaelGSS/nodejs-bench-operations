## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|28,380,783|14197620|
|Object.create({})|2,095,689|1063926|
|new Function with empty prototype|74,722,411|37375367|
|Empty class|73,890,771|36948303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:28:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14197620,"opsSec":28380783.22635546},{"name":"Object.create({})","samples":1063926,"opsSec":2095689.0122515273},{"name":"new Function with empty prototype","samples":37375367,"opsSec":74722411.06786402},{"name":"Empty class","samples":36948303,"opsSec":73890771.88021542}]}-->
