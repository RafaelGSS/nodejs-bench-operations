## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,002,394|94|
|Using delete property (proto: null)|21,570,353|98|
|Using delete property (cached proto: null)|4,052,005|96|
|Using undefined assignment|851,874,978|100|
|Using undefined assignment (proto: null)|23,062,112|96|
|Using undefined property (cached proto: null)|850,982,147|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":4002394.2037013406,"samples":7},{"name":"Using delete property (proto: null)","opsSec":21570353.138589215,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4052004.887853679,"samples":5},{"name":"Using undefined assignment","opsSec":851874978.1800672,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23062111.97521027,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":850982147.027549,"samples":7}]}-->
