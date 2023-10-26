## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|623,905,062|87|
|[async] - function|87,651,745|84|
|[async] - await function|642,023|22|
|[async] - await async function|173,097|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"function","opsSec":623905062.0653735,"samples":6},{"name":"[async] - function","opsSec":87651744.77694981,"samples":8},{"name":"[async] - await function","opsSec":642022.9729649173,"samples":3},{"name":"[async] - await async function","opsSec":173096.69411976056,"samples":3}]}-->
