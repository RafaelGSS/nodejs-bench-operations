## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,030,277|2015180|
|Using replaceAll()|3,045,286|1527354|
|Using replaceAll(//g)|3,496,162|1748082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:04:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2015180,"opsSec":4030277.7500916766},{"name":"Using replaceAll()","samples":1527354,"opsSec":3045286.595869443},{"name":"Using replaceAll(//g)","samples":1748082,"opsSec":3496162.902204849}]}-->
