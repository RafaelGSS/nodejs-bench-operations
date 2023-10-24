## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,821,416|94|
|fromUnixToISOString(new Date())|1,393,297|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:09:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1821416.1415623827,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1393297.0755363444,"samples":4}]}-->
