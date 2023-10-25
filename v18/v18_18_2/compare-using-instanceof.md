## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|134,416|51|
|[True conditional] Using constructor name|101,365|82|
|[True conditional] Check if property is valid then instanceof |103,924|86|
|[False conditional] Using instanceof only|654,461,694|87|
|[False conditional] Using constructor name|662,165,747|89|
|[False conditional] Check if property is valid then instanceof |630,796,491|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":134415.67239457183,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":101365.25658969476,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":103923.52752852718,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":654461693.7737578,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":662165747.1558386,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":630796490.6541665,"samples":8}]}-->
