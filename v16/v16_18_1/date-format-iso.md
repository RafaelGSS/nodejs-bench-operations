## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,590,637|96|
|fromUnixToISOString(new Date())|2,077,897|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:57:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2590637.444046439,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2077896.8786674319,"samples":5}]}-->
