## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|141,367,847|70683942|
|Using backtick (`)|92,101,648|46050853|
|Using array.join|9,544,928|4822027|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:35:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using + sign","opsSec":141367847.24435973,"samples":70683942},{"name":"Using backtick (`)","opsSec":92101648.52857132,"samples":46050853},{"name":"Using array.join","opsSec":9544928.58040252,"samples":4822027}]}-->
