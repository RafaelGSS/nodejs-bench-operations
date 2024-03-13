## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,466,589|92|
|fromUnixToISOString(new Date())|2,281,669|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:47:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1466588.5407221112,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2281668.6728250654,"samples":6}]}-->
