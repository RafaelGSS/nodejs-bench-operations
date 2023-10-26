## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|586,466,486|94|
|[async] - function|92,837,262|94|
|[async] - await function|588,205|16|
|[async] - await async function|336,008|16|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":586466486.1057616,"samples":8},{"name":"[async] - function","opsSec":92837261.65761109,"samples":7},{"name":"[async] - await function","opsSec":588205.2375195326,"samples":3},{"name":"[async] - await async function","opsSec":336007.7839638141,"samples":3}]}-->
