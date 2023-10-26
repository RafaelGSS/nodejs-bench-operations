## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|586,795,567|98|
|[async] - function|126,398,597|97|
|[async] - await function|697,324|16|
|[async] - await async function|144,099|19|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":586795567.3173264,"samples":7},{"name":"[async] - function","opsSec":126398597.13724816,"samples":10},{"name":"[async] - await function","opsSec":697324.0992698827,"samples":3},{"name":"[async] - await async function","opsSec":144098.54333031076,"samples":3}]}-->
