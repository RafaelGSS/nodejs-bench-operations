## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|742,223|83|
|fromUnixToISOString(new Date())|1,313,643|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":742223.13196516,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1313642.6560793107,"samples":6}]}-->
