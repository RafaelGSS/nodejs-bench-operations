## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|845,253,722|99|
|[async] async function|16,378,332|86|
|[async] function|209,568|26|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:14:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":845253722.35941,"samples":6},{"name":"[async] async function","opsSec":16378331.599808896,"samples":6},{"name":"[async] function","opsSec":209567.91448351968,"samples":3}]}-->
