## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,319,081|18704719|
|Object.create({})|2,047,712|1026484|
|new Function with empty prototype|72,697,983|36377773|
|Empty class|79,034,974|39523854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:56:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18704719,"opsSec":37319081.78556243},{"name":"Object.create({})","samples":1026484,"opsSec":2047712.4722223922},{"name":"new Function with empty prototype","samples":36377773,"opsSec":72697983.30063465},{"name":"Empty class","samples":39523854,"opsSec":79034974.35914111}]}-->
