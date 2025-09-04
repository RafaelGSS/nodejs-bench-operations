## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,224,741|36612391|
|using Array.includes (first item)|85,828,338|42926264|
|Using raw comparison|106,332,200|53166862|
|Using raw comparison (first item)|106,125,582|53062908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:07:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36612391,"opsSec":73224741.72639205},{"name":"using Array.includes (first item)","samples":42926264,"opsSec":85828338.99921985},{"name":"Using raw comparison","samples":53166862,"opsSec":106332200.68489298},{"name":"Using raw comparison (first item)","samples":53062908,"opsSec":106125582.52371845}]}-->
