## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,968,333|2984167|
|Date.now()|9,035,116|4517559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:30:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":5968333.408136921,"samples":2984167},{"name":"Date.now()","opsSec":9035116.677358236,"samples":4517559}]}-->
