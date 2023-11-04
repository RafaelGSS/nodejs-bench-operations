## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,492,090|92|
|fromUnixToISOString(new Date())|2,209,901|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:10:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1492090.2793073507,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2209900.997081006,"samples":6}]}-->
