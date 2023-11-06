## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|225,190|57|
|[True conditional] Using constructor name|179,465|94|
|[True conditional] Check if property is valid then instanceof |179,039|93|
|[False conditional] Using instanceof only|853,128,742|101|
|[False conditional] Using constructor name|853,949,007|98|
|[False conditional] Check if property is valid then instanceof |854,378,833|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:40:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":225190.30996670263,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":179465.37622103986,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":179039.0739618672,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":853128741.9145482,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":853949007.3768034,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":854378832.8463086,"samples":6}]}-->
