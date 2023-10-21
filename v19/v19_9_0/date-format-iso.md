## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|894,898|86|
|fromUnixToISOString(new Date())|1,422,288|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":894897.7842669843,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1422287.6199641135,"samples":4}]}-->
