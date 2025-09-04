## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|77,190,177|38608869|
|Using dot notation|68,394,303|34255120|
|Using define property (writable)|4,393,420|2197651|
|Using define property initialized (writable)|5,969,949|2984977|
|Using define property (getter)|2,179,309|1089661|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:13:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":38608869,"opsSec":77190177.5558644},{"name":"Using dot notation","samples":34255120,"opsSec":68394303.03866728},{"name":"Using define property (writable)","samples":2197651,"opsSec":4393420.877769607},{"name":"Using define property initialized (writable)","samples":2984977,"opsSec":5969949.474778297},{"name":"Using define property (getter)","samples":1089661,"opsSec":2179309.0200354764}]}-->
