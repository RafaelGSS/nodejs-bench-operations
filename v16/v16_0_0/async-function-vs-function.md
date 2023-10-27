## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|707,960,332|94|
|[async] async function|10,371,075|87|
|[async] function|156,635|24|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":707960332.2471731,"samples":6},{"name":"[async] async function","opsSec":10371075.41973765,"samples":6},{"name":"[async] function","opsSec":156635.17928849757,"samples":3}]}-->
