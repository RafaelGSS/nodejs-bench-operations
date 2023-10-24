## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|157,415|54|
|[True conditional] Using constructor name|122,201|94|
|[True conditional] Check if property is valid then instanceof |123,472|90|
|[False conditional] Using instanceof only|607,817,330|96|
|[False conditional] Using constructor name|604,801,890|93|
|[False conditional] Check if property is valid then instanceof |600,594,008|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":157414.53398782967,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":122201.42216516972,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":123471.66497511741,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":607817330.3823866,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":604801890.1276802,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":600594008.2387089,"samples":6}]}-->
