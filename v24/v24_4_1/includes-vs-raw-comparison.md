## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,821,356|34413631|
|using Array.includes (first item)|79,415,790|39709922|
|Using raw comparison|96,902,805|48455086|
|Using raw comparison (first item)|98,884,333|49453510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:19:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":34413631,"opsSec":68821356.02651124},{"name":"using Array.includes (first item)","samples":39709922,"opsSec":79415790.30039991},{"name":"Using raw comparison","samples":48455086,"opsSec":96902805.64252068},{"name":"Using raw comparison (first item)","samples":49453510,"opsSec":98884333.9561038}]}-->
