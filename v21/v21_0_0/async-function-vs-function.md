## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,351,727|96|
|[async] async function|18,066,000|89|
|[async] function|170,867|16|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:19:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":846351727.4488513,"samples":7},{"name":"[async] async function","opsSec":18065999.702499572,"samples":7},{"name":"[async] function","opsSec":170866.54747540626,"samples":3}]}-->
