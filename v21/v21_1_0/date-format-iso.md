## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,483,398|92|
|fromUnixToISOString(new Date())|2,187,871|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:10:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1483398.2436451355,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":2187870.9465366066,"samples":6}]}-->
