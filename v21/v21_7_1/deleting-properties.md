## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,892,744|94|
|Using delete property (proto: null)|20,829,654|91|
|Using delete property (cached proto: null)|3,983,586|94|
|Using undefined assignment|819,863,437|96|
|Using undefined assignment (proto: null)|23,410,117|99|
|Using undefined property (cached proto: null)|818,302,979|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3892743.699560664,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20829653.655546788,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3983585.6303053712,"samples":4},{"name":"Using undefined assignment","opsSec":819863437.3852675,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":23410116.987833936,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":818302978.5280856,"samples":6}]}-->
