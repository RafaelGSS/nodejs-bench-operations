## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|88,152,737|44077180|
|Using dot notation|85,519,325|42766262|
|Using define property (writable)|4,532,651|2267603|
|Using define property initialized (writable)|6,038,142|3019965|
|Using define property (getter)|2,184,571|1092331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:47:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44077180,"opsSec":88152737.10810983},{"name":"Using dot notation","samples":42766262,"opsSec":85519325.28941213},{"name":"Using define property (writable)","samples":2267603,"opsSec":4532651.442973254},{"name":"Using define property initialized (writable)","samples":3019965,"opsSec":6038142.601103506},{"name":"Using define property (getter)","samples":1092331,"opsSec":2184571.423299647}]}-->
