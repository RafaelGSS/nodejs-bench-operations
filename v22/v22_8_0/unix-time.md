## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,951,524|4975764|
|Date.now()|18,883,025|9442457|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:09:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":9951524.158711676,"samples":4975764},{"name":"Date.now()","opsSec":18883025.470856607,"samples":9442457}]}-->
