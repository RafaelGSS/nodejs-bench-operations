## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|139,154,382|69579012|
|Using backtick (`)|99,679,293|49873015|
|Using array.join|10,396,457|5198243|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:42:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":139154382.05151293,"samples":69579012},{"name":"Using backtick (`)","opsSec":99679293.91528936,"samples":49873015},{"name":"Using array.join","opsSec":10396457.90877073,"samples":5198243}]}-->
