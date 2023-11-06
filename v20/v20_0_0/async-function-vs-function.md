## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|851,707,129|94|
|[async] async function|17,903,066|86|
|[async] function|339,735|28|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:15:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":851707129.4395357,"samples":6},{"name":"[async] async function","opsSec":17903065.698407065,"samples":6},{"name":"[async] function","opsSec":339734.8034998664,"samples":3}]}-->
