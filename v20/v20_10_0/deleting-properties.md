## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,691,754|93|
|Using delete property (proto: null)|21,410,845|97|
|Using delete property (cached proto: null)|3,794,331|95|
|Using undefined assignment|847,341,630|95|
|Using undefined assignment (proto: null)|23,334,514|94|
|Using undefined property (cached proto: null)|844,224,977|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3691754.3095918032,"samples":4},{"name":"Using delete property (proto: null)","opsSec":21410845.41231661,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3794331.2811436816,"samples":5},{"name":"Using undefined assignment","opsSec":847341630.2709672,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23334513.863828797,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":844224977.1418829,"samples":6}]}-->
