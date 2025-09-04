## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|69,597,806|34799548|
|Using dot notation|79,133,496|39566778|
|Using define property (writable)|4,822,552|2411648|
|Using define property initialized (writable)|6,491,582|3245801|
|Using define property (getter)|2,265,979|1134154|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:10:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":34799548,"opsSec":69597806.07426222},{"name":"Using dot notation","samples":39566778,"opsSec":79133496.96641126},{"name":"Using define property (writable)","samples":2411648,"opsSec":4822552.52636722},{"name":"Using define property initialized (writable)","samples":3245801,"opsSec":6491582.09680929},{"name":"Using define property (getter)","samples":1134154,"opsSec":2265979.4342138134}]}-->
