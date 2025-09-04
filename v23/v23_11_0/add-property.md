## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,664,198|44836868|
|Using dot notation|64,241,064|32161724|
|Using define property (writable)|4,914,654|2457330|
|Using define property initialized (writable)|7,186,657|3594650|
|Using define property (getter)|2,499,599|1249833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44836868,"opsSec":89664198.59852347},{"name":"Using dot notation","samples":32161724,"opsSec":64241064.23137266},{"name":"Using define property (writable)","samples":2457330,"opsSec":4914654.9870519135},{"name":"Using define property initialized (writable)","samples":3594650,"opsSec":7186657.609730054},{"name":"Using define property (getter)","samples":1249833,"opsSec":2499599.5706418105}]}-->
