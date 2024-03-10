## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,407,091|97|
|Using delete property (proto: null)|17,954,606|91|
|Using delete property (cached proto: null)|3,418,955|96|
|Using undefined assignment|898,052,782|96|
|Using undefined assignment (proto: null)|19,877,396|95|
|Using undefined property (cached proto: null)|857,737,284|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3407091.108750856,"samples":4},{"name":"Using delete property (proto: null)","opsSec":17954606.088481624,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3418955.284906991,"samples":6},{"name":"Using undefined assignment","opsSec":898052781.959588,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":19877395.727049008,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":857737283.900238,"samples":8}]}-->
