## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,587,161|1793827|
|Using delete property (proto: null)|15,227,659|7614951|
|Using delete property (cached proto: null)|3,473,850|1737326|
|Using undefined assignment|70,252,638|35126346|
|Using undefined assignment (proto: null)|16,604,679|8303977|
|Using undefined property (cached proto: null)|69,138,875|34569503|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:11:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3587161.446861732,"samples":1793827},{"name":"Using delete property (proto: null)","opsSec":15227659.392146,"samples":7614951},{"name":"Using delete property (cached proto: null)","opsSec":3473850.499317396,"samples":1737326},{"name":"Using undefined assignment","opsSec":70252638.18647914,"samples":35126346},{"name":"Using undefined assignment (proto: null)","opsSec":16604679.391177265,"samples":8303977},{"name":"Using undefined property (cached proto: null)","opsSec":69138875.88063559,"samples":34569503}]}-->
