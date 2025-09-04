## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,259,203|1629604|
|Using replaceAll()|3,123,365|1570211|
|Using replaceAll(//g)|2,957,739|1478961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:05:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1629604,"opsSec":3259203.0720849545},{"name":"Using replaceAll()","samples":1570211,"opsSec":3123365.1778292675},{"name":"Using replaceAll(//g)","samples":1478961,"opsSec":2957739.826888582}]}-->
