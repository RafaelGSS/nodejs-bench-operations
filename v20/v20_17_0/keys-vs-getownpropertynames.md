## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,473,517|25239694|
|Using Object.getOwnPropertyNames()|41,583,470|20792980|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:26:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":50473517.82892946,"samples":25239694},{"name":"Using Object.getOwnPropertyNames()","opsSec":41583470.56395122,"samples":20792980}]}-->
