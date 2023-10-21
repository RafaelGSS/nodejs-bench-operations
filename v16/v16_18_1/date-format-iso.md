## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,670,808|97|
|fromUnixToISOString(new Date())|1,396,581|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1670807.6158302322,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1396581.1478213551,"samples":7}]}-->
