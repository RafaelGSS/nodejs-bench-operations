## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|30,066,304|15051862|
|Object.create({})|1,690,134|860172|
|new Function with empty prototype|97,933,330|48969369|
|Empty class|76,032,749|38024059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:30:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":15051862,"opsSec":30066304.55973192},{"name":"Object.create({})","samples":860172,"opsSec":1690134.3626284064},{"name":"new Function with empty prototype","samples":48969369,"opsSec":97933330.70907822},{"name":"Empty class","samples":38024059,"opsSec":76032749.5003435}]}-->
