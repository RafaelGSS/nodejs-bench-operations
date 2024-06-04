## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,373,918|686960|
|fromUnixToISOString(new Date())|1,979,261|989631|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:16:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1373918.0792624953,"samples":686960},{"name":"fromUnixToISOString(new Date())","opsSec":1979261.8495765075,"samples":989631}]}-->
