## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|745,351,078|87|
|using Array.includes (first item)|740,323,099|87|
|Using raw comparison|733,376,614|83|
|Using raw comparison (first item)|724,490,731|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":745351078.1577241,"samples":7},{"name":"using Array.includes (first item)","opsSec":740323098.8802328,"samples":6},{"name":"Using raw comparison","opsSec":733376613.6945821,"samples":7},{"name":"Using raw comparison (first item)","opsSec":724490731.0334412,"samples":6}]}-->
