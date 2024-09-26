## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,731,021|3365511|
|Date.now()|9,896,256|4948129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:30:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6731021.676899611,"samples":3365511},{"name":"Date.now()","opsSec":9896256.060376232,"samples":4948129}]}-->
