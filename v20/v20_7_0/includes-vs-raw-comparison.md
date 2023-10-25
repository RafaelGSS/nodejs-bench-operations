## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|694,556,093|83|
|using Array.includes (first item)|715,230,373|89|
|Using raw comparison|716,528,313|89|
|Using raw comparison (first item)|724,270,054|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":694556093.4297596,"samples":7},{"name":"using Array.includes (first item)","opsSec":715230372.7591176,"samples":8},{"name":"Using raw comparison","opsSec":716528313.2090039,"samples":6},{"name":"Using raw comparison (first item)","opsSec":724270053.7947059,"samples":6}]}-->
