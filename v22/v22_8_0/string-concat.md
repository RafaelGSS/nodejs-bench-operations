## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|136,898,236|68449174|
|Using backtick (`)|98,989,988|49498210|
|Using array.join|9,972,235|4986656|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:43:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":136898236.8386317,"samples":68449174},{"name":"Using backtick (`)","opsSec":98989988.02653798,"samples":49498210},{"name":"Using array.join","opsSec":9972235.49717808,"samples":4986656}]}-->
