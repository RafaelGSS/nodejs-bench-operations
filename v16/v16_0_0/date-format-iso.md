## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,382,144|91|
|fromUnixToISOString(new Date())|1,955,050|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2382143.596518516,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1955050.268930287,"samples":5}]}-->
