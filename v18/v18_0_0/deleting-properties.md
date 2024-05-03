## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,834,405|93|
|Using delete property (proto: null)|23,283,979|99|
|Using delete property (cached proto: null)|3,863,518|96|
|Using undefined assignment|909,320,322|100|
|Using undefined assignment (proto: null)|25,720,024|96|
|Using undefined property (cached proto: null)|906,458,343|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:48:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3834404.5726473676,"samples":5},{"name":"Using delete property (proto: null)","opsSec":23283978.64253624,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3863517.7295859307,"samples":5},{"name":"Using undefined assignment","opsSec":909320321.6430678,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":25720024.38167484,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":906458343.247205,"samples":11}]}-->
