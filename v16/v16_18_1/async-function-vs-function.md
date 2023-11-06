## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,134,099|99|
|[async] async function|16,590,319|88|
|[async] function|346,177|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:13:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":846134098.5092406,"samples":6},{"name":"[async] async function","opsSec":16590318.608368358,"samples":6},{"name":"[async] function","opsSec":346177.01103227685,"samples":3}]}-->
