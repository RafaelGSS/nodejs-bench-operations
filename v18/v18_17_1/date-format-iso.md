## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,943,380|96|
|fromUnixToISOString(new Date())|1,481,966|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1943379.5663908797,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1481966.3058995241,"samples":9}]}-->
