## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,502,399|93|
|fromUnixToISOString(new Date())|2,167,840|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1502399.0838222608,"samples":8},{"name":"fromUnixToISOString(new Date())","opsSec":2167839.8891623444,"samples":6}]}-->
