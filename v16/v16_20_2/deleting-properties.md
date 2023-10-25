## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,957,383|90|
|Using delete property (proto: null)|9,984,237|94|
|Using delete property (cached proto: null)|1,961,014|95|
|Using undefined assignment|587,984,873|96|
|Using undefined assignment (proto: null)|11,483,991|93|
|Using undefined property (cached proto: null)|585,067,977|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1957382.756215492,"samples":7},{"name":"Using delete property (proto: null)","opsSec":9984236.50956101,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":1961014.046825172,"samples":6},{"name":"Using undefined assignment","opsSec":587984873.206031,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":11483991.452570606,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":585067977.3829693,"samples":8}]}-->
