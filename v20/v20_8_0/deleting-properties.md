## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,920,033|95|
|Using delete property (proto: null)|20,299,604|95|
|Using delete property (cached proto: null)|3,939,913|98|
|Using undefined assignment|852,389,898|99|
|Using undefined assignment (proto: null)|21,898,293|89|
|Using undefined property (cached proto: null)|848,711,958|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:39:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3920032.70197559,"samples":5},{"name":"Using delete property (proto: null)","opsSec":20299603.827050906,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3939913.259220274,"samples":7},{"name":"Using undefined assignment","opsSec":852389898.2565745,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":21898293.27285172,"samples":9},{"name":"Using undefined property (cached proto: null)","opsSec":848711958.3870974,"samples":6}]}-->
