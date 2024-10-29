## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,383,623|1694374|
|Using replaceAll()|3,173,473|1586800|
|Using replaceAll(//g)|3,024,937|1512469|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:08:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3383623.1846263036,"samples":1694374},{"name":"Using replaceAll()","opsSec":3173473.2197448714,"samples":1586800},{"name":"Using replaceAll(//g)","opsSec":3024937.975800496,"samples":1512469}]}-->
