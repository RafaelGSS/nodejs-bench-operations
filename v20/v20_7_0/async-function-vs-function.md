## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|584,079,752|92|
|[async] - function|92,902,190|90|
|[async] - await function|671,089|24|
|[async] - await async function|145,892|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":584079751.7363563,"samples":6},{"name":"[async] - function","opsSec":92902190.10600598,"samples":7},{"name":"[async] - await function","opsSec":671089.0058408516,"samples":3},{"name":"[async] - await async function","opsSec":145892.15266718043,"samples":4}]}-->
