## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|162,275,052|81413957|
|Using backtick (`)|105,325,527|52770621|
|Using array.join|10,225,889|5112986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:39:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":162275052.95563346,"samples":81413957},{"name":"Using backtick (`)","opsSec":105325527.10509764,"samples":52770621},{"name":"Using array.join","opsSec":10225889.90655583,"samples":5112986}]}-->
