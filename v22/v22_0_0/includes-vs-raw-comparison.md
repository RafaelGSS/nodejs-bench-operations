## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,622,104|34811065|
|using Array.includes (first item)|77,820,028|38910030|
|Using raw comparison|95,199,021|47608576|
|Using raw comparison (first item)|97,115,701|48557859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:20:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":34811065,"opsSec":69622104.23982143},{"name":"using Array.includes (first item)","samples":38910030,"opsSec":77820028.71634845},{"name":"Using raw comparison","samples":47608576,"opsSec":95199021.15602279},{"name":"Using raw comparison (first item)","samples":48557859,"opsSec":97115701.68456213}]}-->
