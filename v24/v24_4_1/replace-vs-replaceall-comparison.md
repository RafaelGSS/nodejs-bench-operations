## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,018,177|2009486|
|Using replaceAll()|3,055,646|1528141|
|Using replaceAll(//g)|3,454,188|1727262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:54:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":2009486,"opsSec":4018177.8794693253},{"name":"Using replaceAll()","samples":1528141,"opsSec":3055646.4988637525},{"name":"Using replaceAll(//g)","samples":1727262,"opsSec":3454188.3910559253}]}-->
