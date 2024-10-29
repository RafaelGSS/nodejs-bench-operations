## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|159,499,111|79751255|
|Using backtick (`)|104,001,012|52000551|
|Using array.join|10,762,800|5381564|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:39:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":159499111.07394302,"samples":79751255},{"name":"Using backtick (`)","opsSec":104001012.35112734,"samples":52000551},{"name":"Using array.join","opsSec":10762800.035957305,"samples":5381564}]}-->
