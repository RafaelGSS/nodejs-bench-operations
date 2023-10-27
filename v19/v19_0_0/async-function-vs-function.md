## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|710,780,049|95|
|[async] async function|9,867,310|86|
|[async] function|207,201|31|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"function","opsSec":710780048.5947919,"samples":6},{"name":"[async] async function","opsSec":9867309.731914796,"samples":8},{"name":"[async] function","opsSec":207201.43697025065,"samples":3}]}-->
