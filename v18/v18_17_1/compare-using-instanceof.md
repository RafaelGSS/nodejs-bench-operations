## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,124|58|
|[True conditional] Using constructor name|146,418|96|
|[True conditional] Check if property is valid then instanceof |147,887|93|
|[False conditional] Using instanceof only|711,593,321|97|
|[False conditional] Using constructor name|712,178,894|97|
|[False conditional] Check if property is valid then instanceof |711,416,929|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":186124.05718249932,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":146417.50688111797,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":147887.4033749991,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":711593321.3603971,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":712178894.1236073,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":711416929.4315556,"samples":8}]}-->
