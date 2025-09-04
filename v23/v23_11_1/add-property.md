## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,238,029|44620971|
|Using dot notation|63,624,208|31855939|
|Using define property (writable)|4,764,241|2382122|
|Using define property initialized (writable)|7,050,322|3528097|
|Using define property (getter)|2,419,700|1209851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:11:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44620971,"opsSec":89238029.26936865},{"name":"Using dot notation","samples":31855939,"opsSec":63624208.930031136},{"name":"Using define property (writable)","samples":2382122,"opsSec":4764241.332024855},{"name":"Using define property initialized (writable)","samples":3528097,"opsSec":7050322.533695874},{"name":"Using define property (getter)","samples":1209851,"opsSec":2419700.1513490845}]}-->
