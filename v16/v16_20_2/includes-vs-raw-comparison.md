## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|682,274,115|86|
|using Array.includes (first item)|662,210,382|87|
|Using raw comparison|655,034,665|87|
|Using raw comparison (first item)|632,342,076|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":682274114.9879324,"samples":6},{"name":"using Array.includes (first item)","opsSec":662210381.9524121,"samples":8},{"name":"Using raw comparison","opsSec":655034665.0217266,"samples":7},{"name":"Using raw comparison (first item)","opsSec":632342075.9629763,"samples":6}]}-->
