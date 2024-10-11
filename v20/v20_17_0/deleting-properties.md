## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,571,990|1786099|
|Using delete property (proto: null)|15,594,863|7802893|
|Using delete property (cached proto: null)|3,567,752|1783878|
|Using undefined assignment|74,484,335|37550095|
|Using undefined assignment (proto: null)|16,880,712|8440545|
|Using undefined property (cached proto: null)|74,742,914|37384796|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:18:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3571990.4602102814,"samples":1786099},{"name":"Using delete property (proto: null)","opsSec":15594863.357704265,"samples":7802893},{"name":"Using delete property (cached proto: null)","opsSec":3567752.7248029984,"samples":1783878},{"name":"Using undefined assignment","opsSec":74484335.78446214,"samples":37550095},{"name":"Using undefined assignment (proto: null)","opsSec":16880712.34470342,"samples":8440545},{"name":"Using undefined property (cached proto: null)","opsSec":74742914.45999928,"samples":37384796}]}-->
