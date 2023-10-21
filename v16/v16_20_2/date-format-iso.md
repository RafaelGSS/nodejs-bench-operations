## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,640,623|91|
|fromUnixToISOString(new Date())|1,420,635|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1640622.5192633655,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1420634.9212216632,"samples":6}]}-->
