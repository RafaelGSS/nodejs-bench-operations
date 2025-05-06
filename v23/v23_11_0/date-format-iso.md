## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,521,808|760949|
|fromUnixToISOString(new Date())|2,270,964|1135745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:31:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":760949,"opsSec":1521808.0367960967},{"name":"fromUnixToISOString(new Date())","samples":1135745,"opsSec":2270964.4397835587}]}-->
