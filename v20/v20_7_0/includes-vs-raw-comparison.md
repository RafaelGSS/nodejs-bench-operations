## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|787,741,644|86|
|using Array.includes (first item)|802,978,507|91|
|Using raw comparison|795,573,245|90|
|Using raw comparison (first item)|779,262,121|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":787741644.4229387,"samples":6},{"name":"using Array.includes (first item)","opsSec":802978506.574192,"samples":7},{"name":"Using raw comparison","opsSec":795573245.2927407,"samples":5},{"name":"Using raw comparison (first item)","opsSec":779262120.6746552,"samples":6}]}-->
