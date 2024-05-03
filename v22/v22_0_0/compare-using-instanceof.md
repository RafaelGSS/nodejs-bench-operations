## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|258,622|57|
|[True conditional] Using constructor name|213,814|96|
|[True conditional] Check if property is valid then instanceof |217,459|99|
|[False conditional] Using instanceof only|146,027,143|81|
|[False conditional] Using constructor name|145,908,542|81|
|[False conditional] Check if property is valid then instanceof |138,613,998|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:04:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":258621.62883415172,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":213813.78196277985,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":217459.2588393083,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":146027143.42420498,"samples":4},{"name":"[False conditional] Using constructor name","opsSec":145908542.1403327,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":138613998.1959488,"samples":4}]}-->
