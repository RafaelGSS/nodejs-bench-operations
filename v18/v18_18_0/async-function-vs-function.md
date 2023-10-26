## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|748,869,846|88|
|[async] - function|93,358,996|85|
|[async] - await function|542,100|16|
|[async] - await async function|342,964|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":748869846.1834687,"samples":8},{"name":"[async] - function","opsSec":93358996.11656398,"samples":6},{"name":"[async] - await function","opsSec":542100.3313142182,"samples":3},{"name":"[async] - await async function","opsSec":342964.47096170747,"samples":3}]}-->
