## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,752,579|90|
|Using replaceAll()|1,644,776|93|
|Using replaceAll(//g)|1,576,793|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:39:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1752579.4019151896,"samples":8},{"name":"Using replaceAll()","opsSec":1644775.8029184265,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1576793.4466587093,"samples":6}]}-->
