## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|288,754|144378|
|[True conditional] Using constructor name|306,969|153485|
|[True conditional] Check if property is valid then instanceof |320,325|160164|
|[False conditional] Using instanceof only|14,854,366|7427184|
|[False conditional] Using constructor name|15,214,345|7607173|
|[False conditional] Check if property is valid then instanceof |13,692,590|6846296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:25:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":288754.87039093126,"samples":144378},{"name":"[True conditional] Using constructor name","opsSec":306969.79862806445,"samples":153485},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":320325.835238135,"samples":160164},{"name":"[False conditional] Using instanceof only","opsSec":14854366.276986094,"samples":7427184},{"name":"[False conditional] Using constructor name","opsSec":15214345.574190352,"samples":7607173},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13692590.904629616,"samples":6846296}]}-->
