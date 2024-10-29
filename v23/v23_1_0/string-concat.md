## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|123,493,442|61746764|
|Using backtick (`)|98,315,609|49170083|
|Using array.join|9,973,219|4986779|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:43:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":123493442.78952447,"samples":61746764},{"name":"Using backtick (`)","opsSec":98315609.12041634,"samples":49170083},{"name":"Using array.join","opsSec":9973219.548821392,"samples":4986779}]}-->
