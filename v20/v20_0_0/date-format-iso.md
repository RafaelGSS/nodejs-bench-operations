## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,498,726|95|
|fromUnixToISOString(new Date())|2,313,687|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1498725.555129517,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2313687.4734178875,"samples":4}]}-->
