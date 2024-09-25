## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,968,345|1484173|
|Using delete property (proto: null)|7,667,080|3833541|
|Using delete property (cached proto: null)|2,956,505|1478253|
|Using undefined assignment|12,935,472|6467737|
|Using undefined assignment (proto: null)|7,551,303|3775652|
|Using undefined property (cached proto: null)|12,125,479|6062740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:59:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2968345.0441950774,"samples":1484173},{"name":"Using delete property (proto: null)","opsSec":7667080.71190412,"samples":3833541},{"name":"Using delete property (cached proto: null)","opsSec":2956505.798956462,"samples":1478253},{"name":"Using undefined assignment","opsSec":12935472.34421672,"samples":6467737},{"name":"Using undefined assignment (proto: null)","opsSec":7551303.62245991,"samples":3775652},{"name":"Using undefined property (cached proto: null)","opsSec":12125479.418017728,"samples":6062740}]}-->
