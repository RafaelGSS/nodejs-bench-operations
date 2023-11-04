## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,676,790|89|
|Date.now()|16,791,854|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:58:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":8676789.559367772,"samples":6},{"name":"Date.now()","opsSec":16791854.226528972,"samples":6}]}-->
