## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|97,587,992|48843873|
|Using dot notation|67,115,368|33576843|
|Using define property (writable)|4,840,006|2420005|
|Using define property initialized (writable)|6,996,972|3498493|
|Using define property (getter)|2,394,863|1197440|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:42:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":48843873,"opsSec":97587992.33493917},{"name":"Using dot notation","samples":33576843,"opsSec":67115368.49381952},{"name":"Using define property (writable)","samples":2420005,"opsSec":4840006.553915333},{"name":"Using define property initialized (writable)","samples":3498493,"opsSec":6996972.761727535},{"name":"Using define property (getter)","samples":1197440,"opsSec":2394863.097056261}]}-->
