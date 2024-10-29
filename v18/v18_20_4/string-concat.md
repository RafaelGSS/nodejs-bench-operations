## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|161,162,184|80582393|
|Using backtick (`)|106,201,430|53100783|
|Using array.join|10,583,705|5293472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:40:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":161162184.19769832,"samples":80582393},{"name":"Using backtick (`)","opsSec":106201430.6993773,"samples":53100783},{"name":"Using array.join","opsSec":10583705.132220618,"samples":5293472}]}-->
