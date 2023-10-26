## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|577,557,868|94|
|[async] - function|88,685,532|92|
|[async] - await function|627,664|18|
|[async] - await async function|168,679|14|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":577557867.8764043,"samples":7},{"name":"[async] - function","opsSec":88685531.68200035,"samples":7},{"name":"[async] - await function","opsSec":627664.1296155332,"samples":3},{"name":"[async] - await async function","opsSec":168679.25261292944,"samples":3}]}-->
