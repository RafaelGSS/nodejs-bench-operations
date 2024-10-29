## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,938,479|1969433|
|Using delete property (proto: null)|17,171,430|8586188|
|Using delete property (cached proto: null)|3,921,535|1960814|
|Using undefined assignment|67,835,268|33917652|
|Using undefined assignment (proto: null)|18,247,282|9125552|
|Using undefined property (cached proto: null)|70,846,584|35428118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:41:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3938479.611519232,"samples":1969433},{"name":"Using delete property (proto: null)","opsSec":17171430.57537538,"samples":8586188},{"name":"Using delete property (cached proto: null)","opsSec":3921535.7811645702,"samples":1960814},{"name":"Using undefined assignment","opsSec":67835268.45431933,"samples":33917652},{"name":"Using undefined assignment (proto: null)","opsSec":18247282.39865812,"samples":9125552},{"name":"Using undefined property (cached proto: null)","opsSec":70846584.00308858,"samples":35428118}]}-->
