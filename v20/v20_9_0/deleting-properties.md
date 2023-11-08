## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,903,124|98|
|Using delete property (proto: null)|21,229,518|97|
|Using delete property (cached proto: null)|3,917,481|99|
|Using undefined assignment|849,215,040|100|
|Using undefined assignment (proto: null)|21,785,239|99|
|Using undefined property (cached proto: null)|845,790,480|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:29:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3903124.390105139,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21229518.012489766,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3917481.050988109,"samples":6},{"name":"Using undefined assignment","opsSec":849215039.8672622,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":21785238.683331236,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":845790480.0491148,"samples":6}]}-->
