## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,549,112|97|
|fromUnixToISOString(new Date())|2,270,537|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:25:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1549112.0153936003,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2270536.611308688,"samples":7}]}-->
