## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,692,812|2846407|
|Date.now()|8,583,583|4291792|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:28:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":5692812.713348257,"samples":2846407},{"name":"Date.now()","opsSec":8583583.802194351,"samples":4291792}]}-->
