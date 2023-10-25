## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,006,846|87|
|Using delete property (proto: null)|9,591,043|89|
|Using delete property (cached proto: null)|2,025,309|91|
|Using undefined assignment|644,339,132|84|
|Using undefined assignment (proto: null)|12,647,331|88|
|Using undefined property (cached proto: null)|635,647,257|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2006845.9449217245,"samples":6},{"name":"Using delete property (proto: null)","opsSec":9591042.781750834,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2025308.962914075,"samples":6},{"name":"Using undefined assignment","opsSec":644339131.812047,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":12647330.50804694,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":635647256.9027691,"samples":7}]}-->
