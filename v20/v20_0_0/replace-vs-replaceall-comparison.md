## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,478,965|1740125|
|Using replaceAll()|3,062,786|1531394|
|Using replaceAll(//g)|3,139,375|1569886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:03:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1740125,"opsSec":3478965.357252181},{"name":"Using replaceAll()","samples":1531394,"opsSec":3062786.768759719},{"name":"Using replaceAll(//g)","samples":1569886,"opsSec":3139375.2143666563}]}-->
