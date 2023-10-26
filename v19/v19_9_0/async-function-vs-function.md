## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|714,638,479|85|
|[async] - function|87,378,644|85|
|[async] - await function|577,021|17|
|[async] - await async function|219,665|9|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"function","opsSec":714638479.3837687,"samples":7},{"name":"[async] - function","opsSec":87378643.83320767,"samples":7},{"name":"[async] - await function","opsSec":577021.3821936774,"samples":3},{"name":"[async] - await async function","opsSec":219664.79702427296,"samples":4}]}-->
