## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,278,657|1639331|
|Using delete property (proto: null)|16,408,078|8204918|
|Using delete property (cached proto: null)|3,173,312|1586823|
|Using undefined assignment|80,109,228|40054622|
|Using undefined assignment (proto: null)|19,287,922|9643964|
|Using undefined property (cached proto: null)|80,199,805|40099909|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:58:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using delete property","opsSec":3278657.652499953,"samples":1639331},{"name":"Using delete property (proto: null)","opsSec":16408078.268207438,"samples":8204918},{"name":"Using delete property (cached proto: null)","opsSec":3173312.5800472144,"samples":1586823},{"name":"Using undefined assignment","opsSec":80109228.29859126,"samples":40054622},{"name":"Using undefined assignment (proto: null)","opsSec":19287922.13647167,"samples":9643964},{"name":"Using undefined property (cached proto: null)","opsSec":80199805.16803119,"samples":40099909}]}-->
