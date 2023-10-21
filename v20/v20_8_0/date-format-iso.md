## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|773,480|81|
|fromUnixToISOString(new Date())|1,331,801|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:38:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":773479.5256467701,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1331800.582203007,"samples":5}]}-->
