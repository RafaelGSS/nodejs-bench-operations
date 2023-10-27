## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|671,296,410|90|
|[async] async function|10,710,921|85|
|[async] function|254,131|29|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"function","opsSec":671296410.243675,"samples":8},{"name":"[async] async function","opsSec":10710920.82085785,"samples":7},{"name":"[async] function","opsSec":254131.12872098587,"samples":3}]}-->
