## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|849,865,397|98|
|[async] async function|16,824,626|90|
|[async] function|337,111|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:13:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":849865397.2090824,"samples":6},{"name":"[async] async function","opsSec":16824626.258270986,"samples":6},{"name":"[async] function","opsSec":337111.3723401466,"samples":3}]}-->
