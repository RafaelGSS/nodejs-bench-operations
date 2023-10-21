## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,684,449|94|
|fromUnixToISOString(new Date())|1,390,665|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1684449.2231516861,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1390665.0300875467,"samples":4}]}-->
