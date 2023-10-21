## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,695,147|95|
|fromUnixToISOString(new Date())|1,439,686|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1695146.5897859924,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1439686.307682611,"samples":10}]}-->