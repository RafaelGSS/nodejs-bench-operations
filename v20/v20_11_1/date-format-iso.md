## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,469,069|93|
|fromUnixToISOString(new Date())|2,244,559|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1469069.4296916723,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2244559.033366767,"samples":4}]}-->
