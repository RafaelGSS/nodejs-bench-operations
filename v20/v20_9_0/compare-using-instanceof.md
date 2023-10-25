## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|143,922|55|
|[True conditional] Using constructor name|113,229|86|
|[True conditional] Check if property is valid then instanceof |114,047|86|
|[False conditional] Using instanceof only|641,765,617|88|
|[False conditional] Using constructor name|632,360,730|85|
|[False conditional] Check if property is valid then instanceof |645,141,004|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":143921.77905905613,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":113228.63114677787,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":114046.71259826362,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":641765617.3631127,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":632360730.0877753,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":645141003.5838996,"samples":9}]}-->
