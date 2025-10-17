## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,407,893|704024|
|fromUnixToISOString(new Date())|2,100,419|1050210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:02:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":704024,"opsSec":1407893.663880778},{"name":"fromUnixToISOString(new Date())","samples":1050210,"opsSec":2100419.5967194377}]}-->
