## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,396,149|94|
|fromUnixToISOString(new Date())|2,193,597|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1396149.0986145088,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2193597.186286845,"samples":5}]}-->
