## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|569,027,265|93|
|[async] async function|8,199,705|80|
|[async] function|196,310|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"function","opsSec":569027265.1181871,"samples":9},{"name":"[async] async function","opsSec":8199704.68329064,"samples":7},{"name":"[async] function","opsSec":196309.5641322872,"samples":3}]}-->
