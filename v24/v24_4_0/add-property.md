## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|104,684,938|52386528|
|Using dot notation|78,224,394|39112205|
|Using define property (writable)|5,010,737|2506401|
|Using define property initialized (writable)|7,123,149|3561577|
|Using define property (getter)|2,403,071|1201658|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:14:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":52386528,"opsSec":104684938.7090609},{"name":"Using dot notation","samples":39112205,"opsSec":78224394.66801864},{"name":"Using define property (writable)","samples":2506401,"opsSec":5010737.12533802},{"name":"Using define property initialized (writable)","samples":3561577,"opsSec":7123149.583647258},{"name":"Using define property (getter)","samples":1201658,"opsSec":2403071.7133419085}]}-->
