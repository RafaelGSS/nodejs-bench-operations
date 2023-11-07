## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|855,176,302|95|
|[async] async function|17,762,376|85|
|[async] function|325,301|29|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:16:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":855176301.6924698,"samples":6},{"name":"[async] async function","opsSec":17762375.54654895,"samples":7},{"name":"[async] function","opsSec":325300.99594956206,"samples":3}]}-->
