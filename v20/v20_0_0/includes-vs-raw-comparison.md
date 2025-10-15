## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|72,729,601|36367072|
|using Array.includes (first item)|85,134,701|42567951|
|Using raw comparison|101,132,574|50578099|
|Using raw comparison (first item)|100,907,840|50453939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:38:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36367072,"opsSec":72729601.018202},{"name":"using Array.includes (first item)","samples":42567951,"opsSec":85134701.26017344},{"name":"Using raw comparison","samples":50578099,"opsSec":101132574.23971818},{"name":"Using raw comparison (first item)","samples":50453939,"opsSec":100907840.46228336}]}-->
