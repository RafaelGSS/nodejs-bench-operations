## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,475,365|6737683|
|using Array.includes (first item)|13,847,906|6923954|
|Using raw comparison|14,222,687|7111344|
|Using raw comparison (first item)|13,255,222|6627612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:24:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13475365.595790664,"samples":6737683},{"name":"using Array.includes (first item)","opsSec":13847906.144441308,"samples":6923954},{"name":"Using raw comparison","opsSec":14222687.601973029,"samples":7111344},{"name":"Using raw comparison (first item)","opsSec":13255222.43590907,"samples":6627612}]}-->
