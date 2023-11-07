## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,933,030|96|
|Using delete property (proto: null)|21,207,030|93|
|Using delete property (cached proto: null)|4,027,054|95|
|Using undefined assignment|854,266,944|99|
|Using undefined assignment (proto: null)|22,360,904|98|
|Using undefined property (cached proto: null)|852,074,633|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:37:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3933030.0523914024,"samples":4},{"name":"Using delete property (proto: null)","opsSec":21207029.946157023,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4027053.5351204146,"samples":4},{"name":"Using undefined assignment","opsSec":854266944.3772606,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":22360904.345713608,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":852074633.4504796,"samples":7}]}-->
