## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,937,917|81|
|Using replaceAll()|1,876,475|88|
|Using replaceAll(//g)|1,718,545|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1937917.089012237,"samples":4},{"name":"Using replaceAll()","opsSec":1876475.0562634943,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1718544.9216759992,"samples":5}]}-->
