## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,079,463|3039732|
|Date.now()|8,111,223|4055612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:31:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6079463.452858101,"samples":3039732},{"name":"Date.now()","opsSec":8111223.448442476,"samples":4055612}]}-->
