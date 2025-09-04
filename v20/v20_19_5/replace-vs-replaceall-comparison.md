## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,379,322|1690110|
|Using replaceAll()|2,873,999|1437001|
|Using replaceAll(//g)|2,992,268|1496500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:02:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1690110,"opsSec":3379322.1546553737},{"name":"Using replaceAll()","samples":1437001,"opsSec":2873999.67780826},{"name":"Using replaceAll(//g)","samples":1496500,"opsSec":2992268.294649373}]}-->
