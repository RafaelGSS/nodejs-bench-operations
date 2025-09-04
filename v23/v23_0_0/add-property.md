## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,590,899|44796788|
|Using dot notation|63,898,101|31961402|
|Using define property (writable)|4,781,232|2391596|
|Using define property initialized (writable)|7,182,925|3593667|
|Using define property (getter)|2,402,610|1205684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:11:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44796788,"opsSec":89590899.91981938},{"name":"Using dot notation","samples":31961402,"opsSec":63898101.50514293},{"name":"Using define property (writable)","samples":2391596,"opsSec":4781232.5074814595},{"name":"Using define property initialized (writable)","samples":3593667,"opsSec":7182925.307202497},{"name":"Using define property (getter)","samples":1205684,"opsSec":2402610.9635600164}]}-->
