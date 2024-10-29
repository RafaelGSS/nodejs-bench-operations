## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|148,464,360|74232394|
|Using backtick (`)|96,039,451|48019729|
|Using array.join|10,174,441|5089799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:40:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":148464360.71956983,"samples":74232394},{"name":"Using backtick (`)","opsSec":96039451.85347508,"samples":48019729},{"name":"Using array.join","opsSec":10174441.104874877,"samples":5089799}]}-->
