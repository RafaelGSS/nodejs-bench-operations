## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,141,248|43570646|
|using Array.includes (first item)|76,740,110|38370575|
|Using raw comparison|97,477,239|48738967|
|Using raw comparison (first item)|97,356,634|48686082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:55:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":87141248.42937578,"samples":43570646},{"name":"using Array.includes (first item)","opsSec":76740110.47846347,"samples":38370575},{"name":"Using raw comparison","opsSec":97477239.96205147,"samples":48738967},{"name":"Using raw comparison (first item)","opsSec":97356634.83789027,"samples":48686082}]}-->
