## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|706,945,250|85|
|[async] async function|9,358,804|82|
|[async] function|223,281|29|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":706945249.9845141,"samples":6},{"name":"[async] async function","opsSec":9358803.89447388,"samples":7},{"name":"[async] function","opsSec":223281.21344401114,"samples":3}]}-->
