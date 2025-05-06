## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,268,531|1634623|
|Using replaceAll()|3,062,151|1531076|
|Using replaceAll(//g)|2,916,583|1458541|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:37:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1634623,"opsSec":3268531.374837268},{"name":"Using replaceAll()","samples":1531076,"opsSec":3062151.461061343},{"name":"Using replaceAll(//g)","samples":1458541,"opsSec":2916583.2176044583}]}-->
