## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,613,545|84|
|fromUnixToISOString(new Date())|1,331,006|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:09:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1613545.2064158353,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1331006.2443556807,"samples":6}]}-->
