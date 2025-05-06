## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,415,572|36766852|
|using Array.includes (first item)|86,825,660|43416039|
|Using raw comparison|100,661,656|50343249|
|Using raw comparison (first item)|100,248,247|50127651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:49:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":36766852,"opsSec":73415572.61724418},{"name":"using Array.includes (first item)","samples":43416039,"opsSec":86825660.889055},{"name":"Using raw comparison","samples":50343249,"opsSec":100661656.51508188},{"name":"Using raw comparison (first item)","samples":50127651,"opsSec":100248247.73130363}]}-->
