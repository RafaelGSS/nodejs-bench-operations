## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|586,165,982|94|
|[async] - function|90,405,762|93|
|[async] - await function|536,718|20|
|[async] - await async function|347,189|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":586165981.8817105,"samples":10},{"name":"[async] - function","opsSec":90405762.36460026,"samples":7},{"name":"[async] - await function","opsSec":536718.3008309088,"samples":3},{"name":"[async] - await async function","opsSec":347189.2582535045,"samples":4}]}-->
