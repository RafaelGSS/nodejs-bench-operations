## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,350,183|95|
|Using delete property (proto: null)|21,212,217|93|
|Using delete property (cached proto: null)|3,446,767|95|
|Using undefined assignment|820,083,498|98|
|Using undefined assignment (proto: null)|23,421,400|94|
|Using undefined property (cached proto: null)|817,481,811|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using delete property","opsSec":3350183.1691325437,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21212217.459804922,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3446766.5790709476,"samples":5},{"name":"Using undefined assignment","opsSec":820083497.961456,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23421399.549975622,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":817481811.1827663,"samples":7}]}-->
