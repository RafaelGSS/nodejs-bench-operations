## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,525,242|1762914|
|Using replaceAll()|3,019,715|1510013|
|Using replaceAll(//g)|3,170,963|1585718|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:53:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":1762914,"opsSec":3525242.9577292213},{"name":"Using replaceAll()","samples":1510013,"opsSec":3019715.307531439},{"name":"Using replaceAll(//g)","samples":1585718,"opsSec":3170963.7990968213}]}-->
