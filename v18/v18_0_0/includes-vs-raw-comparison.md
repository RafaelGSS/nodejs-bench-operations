## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|118,904,522|98|
|using Array.includes (first item)|130,865,723|92|
|Using raw comparison|849,023,502|98|
|Using raw comparison (first item)|848,043,812|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:15:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":118904521.81247999,"samples":5},{"name":"using Array.includes (first item)","opsSec":130865722.95387892,"samples":6},{"name":"Using raw comparison","opsSec":849023501.8829561,"samples":8},{"name":"Using raw comparison (first item)","opsSec":848043812.3697596,"samples":6}]}-->
