## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,824,803|7412402|
|Setter|5,955,567|2977784|
|Method|14,406,785|7203393|
|DefineProperty (setter)|14,611,070|7305536|
|DefineProperty (setter & enumerable=false)|5,930,333|2965167|
|DefineProperty (setter & configurable=false)|6,003,358|3001680|
|DefineProperty (setter & enumerable=false & configurable=false)|5,971,331|2985666|
|DefineProperty (writable)|14,596,649|7298325|
|DefineProperty (writable & enumerable=false)|14,931,086|7465544|
|DefineProperty (writable & enumerable=false & configurable=false)|14,984,195|7492098|
|DefineProperties (setter)|14,951,476|7475739|
|DefineProperties (setter & enumerable=false)|5,908,567|2954284|
|DefineProperties (setter & enumerable=false & configurable=false)|6,003,149|3001575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:51:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14824803.358321019,"samples":7412402},{"name":"Setter","opsSec":5955567.740399055,"samples":2977784},{"name":"Method","opsSec":14406785.921320572,"samples":7203393},{"name":"DefineProperty (setter)","opsSec":14611070.453140218,"samples":7305536},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5930333.347771587,"samples":2965167},{"name":"DefineProperty (setter & configurable=false)","opsSec":6003358.413189167,"samples":3001680},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5971331.161232215,"samples":2985666},{"name":"DefineProperty (writable)","opsSec":14596649.851497075,"samples":7298325},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14931086.036910519,"samples":7465544},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14984195.844874889,"samples":7492098},{"name":"DefineProperties (setter)","opsSec":14951476.920449892,"samples":7475739},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5908567.363196037,"samples":2954284},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6003149.440935505,"samples":3001575}]}-->
