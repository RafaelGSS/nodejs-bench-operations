## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,351,160|93|
|Using replaceAll()|2,141,096|94|
|Using replaceAll(//g)|2,108,005|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2351159.54213591,"samples":6},{"name":"Using replaceAll()","opsSec":2141095.550121913,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2108005.448031417,"samples":6}]}-->
