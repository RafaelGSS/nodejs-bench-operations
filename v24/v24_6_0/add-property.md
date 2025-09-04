## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|92,905,218|46464710|
|Using dot notation|63,040,569|31593851|
|Using define property (writable)|4,881,894|2442620|
|Using define property initialized (writable)|6,915,452|3458194|
|Using define property (getter)|2,304,386|1152194|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":46464710,"opsSec":92905218.37642337},{"name":"Using dot notation","samples":31593851,"opsSec":63040569.59731859},{"name":"Using define property (writable)","samples":2442620,"opsSec":4881894.291385285},{"name":"Using define property initialized (writable)","samples":3458194,"opsSec":6915452.532904969},{"name":"Using define property (getter)","samples":1152194,"opsSec":2304386.9215469207}]}-->
