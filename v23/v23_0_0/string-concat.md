## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|123,148,505|61579748|
|Using backtick (`)|94,812,895|48040260|
|Using array.join|9,831,993|4916182|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:43:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":123148505.7347542,"samples":61579748},{"name":"Using backtick (`)","opsSec":94812895.48027834,"samples":48040260},{"name":"Using array.join","opsSec":9831993.609136757,"samples":4916182}]}-->
