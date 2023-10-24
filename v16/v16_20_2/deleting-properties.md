## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,681,033|81|
|Using delete property (proto: null)|9,878,844|83|
|Using delete property (cached proto: null)|1,639,050|84|
|Using undefined assignment|677,133,705|81|
|Using undefined assignment (proto: null)|10,741,411|82|
|Using undefined property (cached proto: null)|544,848,237|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1681032.775307486,"samples":6},{"name":"Using delete property (proto: null)","opsSec":9878844.044845136,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":1639049.648945992,"samples":5},{"name":"Using undefined assignment","opsSec":677133704.9276309,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":10741410.788392758,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":544848236.8902055,"samples":6}]}-->
