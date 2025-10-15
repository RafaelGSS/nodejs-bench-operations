## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,087,211|2044101|
|Using replaceAll()|3,160,975|1580597|
|Using replaceAll(//g)|3,288,271|1644136|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:25:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2044101,"opsSec":4087211.9791655587},{"name":"Using replaceAll()","samples":1580597,"opsSec":3160975.563944629},{"name":"Using replaceAll(//g)","samples":1644136,"opsSec":3288271.1582025834}]}-->
