## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,078,123|90|
|fromUnixToISOString(new Date())|1,672,522|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:09:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1078122.9730304799,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1672521.6984086721,"samples":6}]}-->
