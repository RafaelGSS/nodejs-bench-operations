## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,811,394|18437205|
|Object.create({})|2,152,923|1076560|
|new Function with empty prototype|104,020,777|52011549|
|Empty class|72,473,083|36239929|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:55:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18437205,"opsSec":36811394.92895041},{"name":"Object.create({})","samples":1076560,"opsSec":2152923.3864246584},{"name":"new Function with empty prototype","samples":52011549,"opsSec":104020777.92056926},{"name":"Empty class","samples":36239929,"opsSec":72473083.07124834}]}-->
