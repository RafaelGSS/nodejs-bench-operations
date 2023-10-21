## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,671,117|89|
|Date.now()|17,757,075|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":9671117.220433807,"samples":4},{"name":"Date.now()","opsSec":17757075.32656472,"samples":6}]}-->
