## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|849,990,879|98|
|[async] async function|16,832,739|86|
|[async] function|353,126|28|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:14:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":849990879.1732303,"samples":6},{"name":"[async] async function","opsSec":16832739.269487873,"samples":6},{"name":"[async] function","opsSec":353126.1980019028,"samples":3}]}-->
