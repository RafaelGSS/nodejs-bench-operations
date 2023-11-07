## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|854,334,817|99|
|[async] async function|18,183,679|86|
|[async] function|153,308|16|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:18:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":854334817.410835,"samples":7},{"name":"[async] async function","opsSec":18183678.69502398,"samples":6},{"name":"[async] function","opsSec":153307.66202208513,"samples":3}]}-->
