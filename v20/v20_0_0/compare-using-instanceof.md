## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|145,670|57|
|[True conditional] Using constructor name|118,935|87|
|[True conditional] Check if property is valid then instanceof |119,033|89|
|[False conditional] Using instanceof only|742,377,701|90|
|[False conditional] Using constructor name|745,457,866|85|
|[False conditional] Check if property is valid then instanceof |759,322,751|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":145669.79778268866,"samples":5},{"name":"[True conditional] Using constructor name","opsSec":118934.73304080135,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":119033.0511036691,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":742377701.0152013,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":745457865.8147584,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":759322751.1060547,"samples":8}]}-->
