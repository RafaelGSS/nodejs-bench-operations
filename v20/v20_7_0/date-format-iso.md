## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|983,330|94|
|fromUnixToISOString(new Date())|1,614,495|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":983329.9383630567,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1614494.5174961968,"samples":6}]}-->
