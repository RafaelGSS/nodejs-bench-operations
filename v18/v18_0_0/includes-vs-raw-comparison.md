## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|59,645,065|86|
|using Array.includes (first item)|117,661,060|84|
|Using raw comparison|730,667,802|90|
|Using raw comparison (first item)|740,680,931|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":59645064.72161868,"samples":6},{"name":"using Array.includes (first item)","opsSec":117661059.66200058,"samples":6},{"name":"Using raw comparison","opsSec":730667801.7366118,"samples":6},{"name":"Using raw comparison (first item)","opsSec":740680930.7138088,"samples":6}]}-->
