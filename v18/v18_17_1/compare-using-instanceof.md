## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|151,341|54|
|[True conditional] Using constructor name|121,512|92|
|[True conditional] Check if property is valid then instanceof |122,278|91|
|[False conditional] Using instanceof only|581,791,027|93|
|[False conditional] Using constructor name|588,232,063|94|
|[False conditional] Check if property is valid then instanceof |589,557,365|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":151340.6610135677,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":121511.52822205538,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":122277.65420209369,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":581791027.4259527,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":588232063.4145262,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":589557365.344524,"samples":6}]}-->
