## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|130,109,914|65057225|
|Using parseInt(x, 10) - big number (10 len)|92,341,624|46170989|
|Using + - small number (2 len)|92,390,831|46195427|
|Using + - big number (10 len)|93,509,397|46769139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:32:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":130109914.88880663,"samples":65057225},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":92341624.14689627,"samples":46170989},{"name":"Using + - small number (2 len)","opsSec":92390831.64141874,"samples":46195427},{"name":"Using + - big number (10 len)","opsSec":93509397.80950533,"samples":46769139}]}-->
