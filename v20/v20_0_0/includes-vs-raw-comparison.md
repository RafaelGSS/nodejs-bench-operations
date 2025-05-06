## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,386,957|34702648|
|using Array.includes (first item)|77,454,939|38732851|
|Using raw comparison|100,964,754|50493343|
|Using raw comparison (first item)|101,206,309|50616428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:50:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":34702648,"opsSec":69386957.30473217},{"name":"using Array.includes (first item)","samples":38732851,"opsSec":77454939.79102592},{"name":"Using raw comparison","samples":50493343,"opsSec":100964754.63792706},{"name":"Using raw comparison (first item)","samples":50616428,"opsSec":101206309.18027677}]}-->
