## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,328,445|1666114|
|Using replaceAll()|2,825,284|1412812|
|Using replaceAll(//g)|2,909,544|1454868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:37:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1666114,"opsSec":3328445.680809264},{"name":"Using replaceAll()","samples":1412812,"opsSec":2825284.0448720166},{"name":"Using replaceAll(//g)","samples":1454868,"opsSec":2909544.0690159434}]}-->
