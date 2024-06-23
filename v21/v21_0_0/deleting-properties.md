## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,285,994|1642998|
|Using delete property (proto: null)|9,144,182|4572092|
|Using delete property (cached proto: null)|3,266,870|1633436|
|Using undefined assignment|16,649,012|8324507|
|Using undefined assignment (proto: null)|9,577,821|4788911|
|Using undefined property (cached proto: null)|16,641,441|8320721|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:23:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3285994.1010803194,"samples":1642998},{"name":"Using delete property (proto: null)","opsSec":9144182.1926019,"samples":4572092},{"name":"Using delete property (cached proto: null)","opsSec":3266870.6679311385,"samples":1633436},{"name":"Using undefined assignment","opsSec":16649012.337055301,"samples":8324507},{"name":"Using undefined assignment (proto: null)","opsSec":9577821.678566303,"samples":4788911},{"name":"Using undefined property (cached proto: null)","opsSec":16641441.372510204,"samples":8320721}]}-->
