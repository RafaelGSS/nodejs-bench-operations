## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,811,961|89|
|Using delete property (proto: null)|10,451,373|87|
|Using delete property (cached proto: null)|1,784,080|85|
|Using undefined assignment|682,291,674|88|
|Using undefined assignment (proto: null)|11,539,353|89|
|Using undefined property (cached proto: null)|571,731,311|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1811961.0663265244,"samples":6},{"name":"Using delete property (proto: null)","opsSec":10451372.55732046,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":1784080.078781947,"samples":5},{"name":"Using undefined assignment","opsSec":682291674.4318297,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":11539352.601831874,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":571731311.4732766,"samples":6}]}-->
