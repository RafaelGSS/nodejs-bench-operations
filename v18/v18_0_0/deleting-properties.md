## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,722,165|1361083|
|Using delete property (proto: null)|8,387,797|4193899|
|Using delete property (cached proto: null)|2,694,965|1347483|
|Using undefined assignment|15,960,402|7983047|
|Using undefined assignment (proto: null)|9,116,171|4558086|
|Using undefined property (cached proto: null)|15,066,697|7533349|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:16:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2722165.3042764333,"samples":1361083},{"name":"Using delete property (proto: null)","opsSec":8387797.390074569,"samples":4193899},{"name":"Using delete property (cached proto: null)","opsSec":2694965.072177011,"samples":1347483},{"name":"Using undefined assignment","opsSec":15960402.996059248,"samples":7983047},{"name":"Using undefined assignment (proto: null)","opsSec":9116171.358327022,"samples":4558086},{"name":"Using undefined property (cached proto: null)","opsSec":15066697.73624133,"samples":7533349}]}-->
