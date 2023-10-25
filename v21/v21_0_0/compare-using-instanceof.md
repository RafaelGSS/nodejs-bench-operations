## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,632|51|
|[True conditional] Using constructor name|149,369|89|
|[True conditional] Check if property is valid then instanceof |151,897|95|
|[False conditional] Using instanceof only|713,937,667|96|
|[False conditional] Using constructor name|711,929,813|92|
|[False conditional] Check if property is valid then instanceof |713,203,433|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":185632.31600670173,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":149368.95813736125,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":151897.37872726395,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":713937667.4616102,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":711929812.9790542,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":713203433.4026605,"samples":6}]}-->
