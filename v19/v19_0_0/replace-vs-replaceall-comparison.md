## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,328,333|96|
|Using replaceAll()|2,098,583|98|
|Using replaceAll(//g)|2,061,244|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2328333.0015532635,"samples":5},{"name":"Using replaceAll()","opsSec":2098583.4582554633,"samples":6},{"name":"Using replaceAll(//g)","opsSec":2061243.9266219395,"samples":6}]}-->
