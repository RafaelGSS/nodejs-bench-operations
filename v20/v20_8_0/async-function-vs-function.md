## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|716,781,749|95|
|[async] async function|10,776,651|87|
|[async] function|116,174|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":716781748.9698117,"samples":11},{"name":"[async] async function","opsSec":10776650.597774256,"samples":7},{"name":"[async] function","opsSec":116173.94672192639,"samples":3}]}-->
