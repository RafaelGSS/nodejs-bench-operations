## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,939,436|35474183|
|using Array.includes (first item)|84,917,823|42471408|
|Using raw comparison|103,226,426|51613220|
|Using raw comparison (first item)|100,173,612|50192184|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:49:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35474183,"opsSec":70939436.28563924},{"name":"using Array.includes (first item)","samples":42471408,"opsSec":84917823.66548136},{"name":"Using raw comparison","samples":51613220,"opsSec":103226426.9934702},{"name":"Using raw comparison (first item)","samples":50192184,"opsSec":100173612.33631119}]}-->
