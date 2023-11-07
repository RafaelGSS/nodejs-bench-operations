## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|854,062,157|99|
|[async] async function|18,629,299|88|
|[async] function|189,704|16|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:17:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":854062157.2650232,"samples":6},{"name":"[async] async function","opsSec":18629298.83960283,"samples":6},{"name":"[async] function","opsSec":189704.2634036507,"samples":3}]}-->
