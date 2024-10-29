## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,373,760|1687163|
|Using replaceAll()|2,925,104|1462761|
|Using replaceAll(//g)|2,961,366|1480684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:05:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3373760.6724191653,"samples":1687163},{"name":"Using replaceAll()","opsSec":2925104.4179435032,"samples":1462761},{"name":"Using replaceAll(//g)","opsSec":2961366.9457533676,"samples":1480684}]}-->
