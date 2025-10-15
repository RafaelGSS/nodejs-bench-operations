## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,000,333|36500345|
|using Array.includes (first item)|87,156,874|43595564|
|Using raw comparison|96,384,404|48201806|
|Using raw comparison (first item)|97,135,428|48567745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:37:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36500345,"opsSec":73000333.90437122},{"name":"using Array.includes (first item)","samples":43595564,"opsSec":87156874.30251662},{"name":"Using raw comparison","samples":48201806,"opsSec":96384404.51586808},{"name":"Using raw comparison (first item)","samples":48567745,"opsSec":97135428.80467986}]}-->
