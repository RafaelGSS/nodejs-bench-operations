## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|854,533,035|100|
|[async] async function|17,914,079|84|
|[async] function|184,520|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:17:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":854533034.9119725,"samples":6},{"name":"[async] async function","opsSec":17914079.205193274,"samples":7},{"name":"[async] function","opsSec":184519.85073973157,"samples":3}]}-->
