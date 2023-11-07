## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,414,389|97|
|fromUnixToISOString(new Date())|1,984,679|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:00:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2414389.2117306255,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1984679.357839347,"samples":6}]}-->
