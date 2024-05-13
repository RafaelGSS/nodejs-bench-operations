## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|315,017|157509|
|[True conditional] Using constructor name|325,934|162968|
|[True conditional] Check if property is valid then instanceof |329,050|164526|
|[False conditional] Using instanceof only|14,346,824|7173413|
|[False conditional] Using constructor name|14,291,786|7146078|
|[False conditional] Check if property is valid then instanceof |14,253,977|7126989|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:49:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":315017.69002258446,"samples":157509},{"name":"[True conditional] Using constructor name","opsSec":325934.6147778327,"samples":162968},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":329050.6541828243,"samples":164526},{"name":"[False conditional] Using instanceof only","opsSec":14346824.220986448,"samples":7173413},{"name":"[False conditional] Using constructor name","opsSec":14291786.785957398,"samples":7146078},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14253977.914440168,"samples":7126989}]}-->
