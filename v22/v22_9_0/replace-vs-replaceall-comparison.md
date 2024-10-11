## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,327,761|1664123|
|Using replaceAll()|3,173,138|1586727|
|Using replaceAll(//g)|2,954,547|1477275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:30:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3327761.670910892,"samples":1664123},{"name":"Using replaceAll()","opsSec":3173138.1267920304,"samples":1586727},{"name":"Using replaceAll(//g)","opsSec":2954547.612725529,"samples":1477275}]}-->
