## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|12,825,592|6412797|
|Setter|5,920,117|2960059|
|Method|13,172,357|6586180|
|DefineProperty (setter)|13,253,369|6626685|
|DefineProperty (setter & enumerable=false)|5,803,339|2901670|
|DefineProperty (setter & configurable=false)|5,944,492|2972247|
|DefineProperty (setter & enumerable=false & configurable=false)|5,943,339|2971670|
|DefineProperty (writable)|13,128,931|6564467|
|DefineProperty (writable & enumerable=false)|13,231,839|6615920|
|DefineProperty (writable & enumerable=false & configurable=false)|13,431,266|6715634|
|DefineProperties (setter)|13,418,920|6709461|
|DefineProperties (setter & enumerable=false)|5,975,479|2987740|
|DefineProperties (setter & enumerable=false & configurable=false)|5,923,135|2961568|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:53:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":12825592.742881892,"samples":6412797},{"name":"Setter","opsSec":5920117.479045767,"samples":2960059},{"name":"Method","opsSec":13172357.866189823,"samples":6586180},{"name":"DefineProperty (setter)","opsSec":13253369.363872578,"samples":6626685},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5803339.2572366735,"samples":2901670},{"name":"DefineProperty (setter & configurable=false)","opsSec":5944492.906209042,"samples":2972247},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5943339.239190395,"samples":2971670},{"name":"DefineProperty (writable)","opsSec":13128931.032850266,"samples":6564467},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13231839.417871267,"samples":6615920},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13431266.03887872,"samples":6715634},{"name":"DefineProperties (setter)","opsSec":13418920.900072047,"samples":6709461},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5975479.318885299,"samples":2987740},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5923135.478721149,"samples":2961568}]}-->
