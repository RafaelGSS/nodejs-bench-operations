## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,479,226|88|
|fromUnixToISOString(new Date())|2,301,991|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1479225.8475829107,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2301990.824387005,"samples":5}]}-->
