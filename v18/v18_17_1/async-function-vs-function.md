## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|701,942,977|88|
|[async] - function|112,333,931|90|
|[async] - await function|674,133|18|
|[async] - await async function|167,287|7|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":701942976.8362366,"samples":8},{"name":"[async] - function","opsSec":112333931.00603725,"samples":7},{"name":"[async] - await function","opsSec":674132.7182878802,"samples":3},{"name":"[async] - await async function","opsSec":167287.11185158847,"samples":3}]}-->
