## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|397,918|199393|
|[True conditional] Using constructor name|313,132|156709|
|[True conditional] Check if property is valid then instanceof |313,455|156732|
|[False conditional] Using instanceof only|44,431,341|22215679|
|[False conditional] Using constructor name|106,580,424|53294995|
|[False conditional] Check if property is valid then instanceof |106,633,487|53318170|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:07:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":397918.6670273658,"samples":199393},{"name":"[True conditional] Using constructor name","opsSec":313132.65911691036,"samples":156709},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313455.86832786386,"samples":156732},{"name":"[False conditional] Using instanceof only","opsSec":44431341.47154098,"samples":22215679},{"name":"[False conditional] Using constructor name","opsSec":106580424.40690947,"samples":53294995},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":106633487.12768538,"samples":53318170}]}-->
