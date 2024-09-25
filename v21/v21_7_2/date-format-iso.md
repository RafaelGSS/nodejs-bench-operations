## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,189,145|594573|
|fromUnixToISOString(new Date())|1,865,224|932613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:34:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1189145.3126740544,"samples":594573},{"name":"fromUnixToISOString(new Date())","opsSec":1865224.4145599375,"samples":932613}]}-->
