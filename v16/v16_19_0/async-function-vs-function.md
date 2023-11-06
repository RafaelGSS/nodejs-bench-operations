## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,428,558|99|
|[async] async function|16,731,320|90|
|[async] function|347,824|31|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:12:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":846428557.6431224,"samples":6},{"name":"[async] async function","opsSec":16731319.67763224,"samples":7},{"name":"[async] function","opsSec":347823.9175577923,"samples":3}]}-->
