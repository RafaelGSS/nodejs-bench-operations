## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,281,221|640611|
|fromUnixToISOString(new Date())|1,787,164|893583|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:01:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1281221.4695740563,"samples":640611},{"name":"fromUnixToISOString(new Date())","opsSec":1787164.2092610186,"samples":893583}]}-->
