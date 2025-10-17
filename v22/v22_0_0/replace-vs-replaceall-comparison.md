## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,269,807|1634905|
|Using replaceAll()|3,202,329|1601508|
|Using replaceAll(//g)|3,091,689|1545898|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:54:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":1634905,"opsSec":3269807.645738495},{"name":"Using replaceAll()","samples":1601508,"opsSec":3202329.9584483416},{"name":"Using replaceAll(//g)","samples":1545898,"opsSec":3091689.466564361}]}-->
