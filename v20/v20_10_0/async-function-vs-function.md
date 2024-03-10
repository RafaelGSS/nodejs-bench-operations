## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|845,577,698|98|
|[async] async function|17,170,996|88|
|[async] function|191,693|19|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":845577698.276055,"samples":5},{"name":"[async] async function","opsSec":17170995.795459077,"samples":6},{"name":"[async] function","opsSec":191693.14315070445,"samples":3}]}-->
