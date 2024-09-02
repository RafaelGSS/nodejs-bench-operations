## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|318,042|159022|
|[True conditional] Using constructor name|310,446|155224|
|[True conditional] Check if property is valid then instanceof |313,870|156936|
|[False conditional] Using instanceof only|15,341,948|7670975|
|[False conditional] Using constructor name|15,156,328|7578165|
|[False conditional] Check if property is valid then instanceof |14,442,860|7221431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":318042.14008983993,"samples":159022},{"name":"[True conditional] Using constructor name","opsSec":310446.26025931735,"samples":155224},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313870.2630420226,"samples":156936},{"name":"[False conditional] Using instanceof only","opsSec":15341948.772477414,"samples":7670975},{"name":"[False conditional] Using constructor name","opsSec":15156328.57527155,"samples":7578165},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14442860.844495606,"samples":7221431}]}-->
