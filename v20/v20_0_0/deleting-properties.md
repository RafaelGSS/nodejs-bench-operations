## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,152,220|87|
|Using delete property (proto: null)|12,077,432|87|
|Using delete property (cached proto: null)|2,201,136|90|
|Using undefined assignment|663,881,943|88|
|Using undefined assignment (proto: null)|13,055,140|90|
|Using undefined property (cached proto: null)|639,136,333|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2152220.0322882975,"samples":5},{"name":"Using delete property (proto: null)","opsSec":12077432.344977314,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2201136.0285486523,"samples":4},{"name":"Using undefined assignment","opsSec":663881943.1728916,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":13055139.671589307,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":639136333.2510166,"samples":6}]}-->
