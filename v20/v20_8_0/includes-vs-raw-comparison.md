## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|689,460,680|83|
|using Array.includes (first item)|702,474,103|89|
|Using raw comparison|693,458,620|90|
|Using raw comparison (first item)|692,822,608|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":689460680.4619726,"samples":6},{"name":"using Array.includes (first item)","opsSec":702474102.8987685,"samples":9},{"name":"Using raw comparison","opsSec":693458620.1638358,"samples":5},{"name":"Using raw comparison (first item)","opsSec":692822608.1122094,"samples":6}]}-->
