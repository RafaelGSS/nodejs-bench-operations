## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|848,505,686|100|
|[async] async function|17,633,212|87|
|[async] function|330,261|27|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:15:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":848505686.1385969,"samples":6},{"name":"[async] async function","opsSec":17633211.745696396,"samples":8},{"name":"[async] function","opsSec":330260.7084237526,"samples":3}]}-->
