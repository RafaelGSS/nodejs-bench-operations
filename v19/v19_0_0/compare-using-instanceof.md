## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|159,532|57|
|[True conditional] Using constructor name|127,028|88|
|[True conditional] Check if property is valid then instanceof |129,024|90|
|[False conditional] Using instanceof only|642,482,960|89|
|[False conditional] Using constructor name|636,437,458|89|
|[False conditional] Check if property is valid then instanceof |637,991,258|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":159532.33235504167,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":127028.11857543683,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":129024.44862660694,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":642482959.5455151,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":636437457.8131907,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":637991257.5240357,"samples":6}]}-->
