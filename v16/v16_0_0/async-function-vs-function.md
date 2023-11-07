## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|847,016,148|96|
|[async] async function|17,342,263|89|
|[async] function|284,104|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:08:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":847016147.8083705,"samples":8},{"name":"[async] async function","opsSec":17342263.01857576,"samples":7},{"name":"[async] function","opsSec":284103.66482231906,"samples":3}]}-->
