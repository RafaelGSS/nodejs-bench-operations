## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,378,195|93|
|Using delete property (proto: null)|12,017,497|96|
|Using delete property (cached proto: null)|2,391,501|95|
|Using undefined assignment|711,942,637|96|
|Using undefined assignment (proto: null)|14,656,443|95|
|Using undefined property (cached proto: null)|709,560,625|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2378194.6326632607,"samples":6},{"name":"Using delete property (proto: null)","opsSec":12017496.67640966,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2391501.434077773,"samples":6},{"name":"Using undefined assignment","opsSec":711942636.6587392,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":14656442.653104883,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":709560624.5850048,"samples":10}]}-->
