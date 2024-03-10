## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,376,024|93|
|Using delete property (proto: null)|21,279,143|97|
|Using delete property (cached proto: null)|3,442,954|95|
|Using undefined assignment|821,958,415|99|
|Using undefined assignment (proto: null)|22,718,969|97|
|Using undefined property (cached proto: null)|819,004,727|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3376023.8505095164,"samples":6},{"name":"Using delete property (proto: null)","opsSec":21279143.39703915,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3442954.260985211,"samples":7},{"name":"Using undefined assignment","opsSec":821958414.9062579,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":22718968.68864352,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":819004726.757667,"samples":11}]}-->
