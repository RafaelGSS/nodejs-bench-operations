## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,470,149|91|
|fromUnixToISOString(new Date())|2,363,853|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1470149.4527320783,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2363852.63176375,"samples":4}]}-->
