## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,645,919|88|
|Using delete property (proto: null)|9,966,275|86|
|Using delete property (cached proto: null)|1,483,836|78|
|Using undefined assignment|626,019,729|87|
|Using undefined assignment (proto: null)|11,791,843|86|
|Using undefined property (cached proto: null)|551,637,873|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":1645919.3491459824,"samples":6},{"name":"Using delete property (proto: null)","opsSec":9966275.162971672,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":1483836.149898622,"samples":7},{"name":"Using undefined assignment","opsSec":626019729.4123694,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":11791842.922232747,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":551637873.2356355,"samples":9}]}-->
