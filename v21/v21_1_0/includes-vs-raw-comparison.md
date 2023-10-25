## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|579,494,431|93|
|using Array.includes (first item)|580,762,369|94|
|Using raw comparison|584,871,058|91|
|Using raw comparison (first item)|583,879,841|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":579494431.3141736,"samples":7},{"name":"using Array.includes (first item)","opsSec":580762369.2095482,"samples":6},{"name":"Using raw comparison","opsSec":584871058.319697,"samples":7},{"name":"Using raw comparison (first item)","opsSec":583879840.8997555,"samples":6}]}-->
