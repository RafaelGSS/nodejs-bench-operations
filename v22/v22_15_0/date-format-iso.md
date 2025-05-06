## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,477,154|738752|
|fromUnixToISOString(new Date())|2,016,000|1008081|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:29:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":738752,"opsSec":1477154.1596717483},{"name":"fromUnixToISOString(new Date())","samples":1008081,"opsSec":2016000.9900649274}]}-->
