## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,918,671|1459336|
|Using delete property (proto: null)|7,454,812|3727407|
|Using delete property (cached proto: null)|2,907,749|1453875|
|Using undefined assignment|13,922,134|6961068|
|Using undefined assignment (proto: null)|8,081,438|4040720|
|Using undefined property (cached proto: null)|13,764,141|6882071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:24:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2918671.492155331,"samples":1459336},{"name":"Using delete property (proto: null)","opsSec":7454812.240658969,"samples":3727407},{"name":"Using delete property (cached proto: null)","opsSec":2907749.1974380794,"samples":1453875},{"name":"Using undefined assignment","opsSec":13922134.023093374,"samples":6961068},{"name":"Using undefined assignment (proto: null)","opsSec":8081438.787774127,"samples":4040720},{"name":"Using undefined property (cached proto: null)","opsSec":13764141.311833661,"samples":6882071}]}-->
