## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|27,629,996|13815005|
|Object.create({})|2,035,711|1017869|
|new Function with empty prototype|71,692,736|35847676|
|Empty class|77,838,299|38919654|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:27:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":13815005,"opsSec":27629996.958641436},{"name":"Object.create({})","samples":1017869,"opsSec":2035711.5805351078},{"name":"new Function with empty prototype","samples":35847676,"opsSec":71692736.93572754},{"name":"Empty class","samples":38919654,"opsSec":77838299.21564215}]}-->
