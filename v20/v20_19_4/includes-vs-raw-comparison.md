## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|72,695,068|36347831|
|using Array.includes (first item)|89,170,622|44591609|
|Using raw comparison|100,863,001|50431507|
|Using raw comparison (first item)|96,443,131|48233484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:19:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":36347831,"opsSec":72695068.51746061},{"name":"using Array.includes (first item)","samples":44591609,"opsSec":89170622.82786681},{"name":"Using raw comparison","samples":50431507,"opsSec":100863001.89643978},{"name":"Using raw comparison (first item)","samples":48233484,"opsSec":96443131.11571343}]}-->
