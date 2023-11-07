## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|849,956,988|98|
|[async] async function|16,365,153|90|
|[async] function|292,249|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:13:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":849956988.412415,"samples":6},{"name":"[async] async function","opsSec":16365153.116623286,"samples":6},{"name":"[async] function","opsSec":292249.4806138971,"samples":3}]}-->
