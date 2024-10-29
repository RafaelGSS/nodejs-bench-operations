## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,395,388|1697982|
|Using replaceAll()|3,103,564|1554409|
|Using replaceAll(//g)|3,078,037|1540531|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:07:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3395388.7600270538,"samples":1697982},{"name":"Using replaceAll()","opsSec":3103564.9742030934,"samples":1554409},{"name":"Using replaceAll(//g)","opsSec":3078037.6310331016,"samples":1540531}]}-->
