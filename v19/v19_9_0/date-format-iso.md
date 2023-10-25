## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|732,262|81|
|fromUnixToISOString(new Date())|1,277,465|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":732262.3721243456,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1277465.3108007568,"samples":7}]}-->
