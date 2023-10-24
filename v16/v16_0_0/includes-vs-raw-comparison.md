## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|609,099,946|87|
|using Array.includes (first item)|603,482,926|86|
|Using raw comparison|621,440,855|91|
|Using raw comparison (first item)|616,196,573|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":609099946.1543404,"samples":6},{"name":"using Array.includes (first item)","opsSec":603482925.7168638,"samples":6},{"name":"Using raw comparison","opsSec":621440855.4705133,"samples":9},{"name":"Using raw comparison (first item)","opsSec":616196573.4826695,"samples":8}]}-->
