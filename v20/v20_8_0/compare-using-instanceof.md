## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,078|57|
|[True conditional] Using constructor name|130,510|93|
|[True conditional] Check if property is valid then instanceof |132,277|95|
|[False conditional] Using instanceof only|599,536,391|98|
|[False conditional] Using constructor name|598,274,902|97|
|[False conditional] Check if property is valid then instanceof |599,491,752|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":167077.8268353799,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":130510.36607761755,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":132277.41236849234,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":599536390.9558457,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":598274901.9229459,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":599491751.6776497,"samples":7}]}-->
