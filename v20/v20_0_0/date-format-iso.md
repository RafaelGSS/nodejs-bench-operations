## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|778,091|89|
|fromUnixToISOString(new Date())|1,197,828|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":778090.8650176844,"samples":3},{"name":"fromUnixToISOString(new Date())","opsSec":1197827.609240521,"samples":5}]}-->
