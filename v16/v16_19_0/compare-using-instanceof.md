## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|174,061|54|
|[True conditional] Using constructor name|141,774|85|
|[True conditional] Check if property is valid then instanceof |144,042|89|
|[False conditional] Using instanceof only|643,676,367|88|
|[False conditional] Using constructor name|679,651,554|88|
|[False conditional] Check if property is valid then instanceof |676,072,620|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":174060.85364306832,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":141773.7615161165,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":144041.64029475953,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":643676366.8784913,"samples":11},{"name":"[False conditional] Using constructor name","opsSec":679651554.4556828,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":676072620.2858037,"samples":7}]}-->
