## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|680,436,295|88|
|[async] async function|7,762,589|79|
|[async] function|162,482|26|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":680436294.9396358,"samples":5},{"name":"[async] async function","opsSec":7762589.001240709,"samples":8},{"name":"[async] function","opsSec":162482.3055375439,"samples":3}]}-->
