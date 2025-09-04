## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,225,746|1613390|
|Using replaceAll()|3,056,918|1528460|
|Using replaceAll(//g)|2,916,126|1458126|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:03:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1613390,"opsSec":3225746.1741571524},{"name":"Using replaceAll()","samples":1528460,"opsSec":3056918.991216733},{"name":"Using replaceAll(//g)","samples":1458126,"opsSec":2916126.793180008}]}-->
