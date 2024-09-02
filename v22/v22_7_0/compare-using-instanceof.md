## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|326,441|163221|
|[True conditional] Using constructor name|314,680|157341|
|[True conditional] Check if property is valid then instanceof |320,060|160031|
|[False conditional] Using instanceof only|15,249,948|7624975|
|[False conditional] Using constructor name|15,878,883|7939442|
|[False conditional] Check if property is valid then instanceof |15,099,948|7549975|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:50:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":326441.30663852853,"samples":163221},{"name":"[True conditional] Using constructor name","opsSec":314680.17988974426,"samples":157341},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":320060.08348028857,"samples":160031},{"name":"[False conditional] Using instanceof only","opsSec":15249948.657999516,"samples":7624975},{"name":"[False conditional] Using constructor name","opsSec":15878883.999731846,"samples":7939442},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15099948.460232776,"samples":7549975}]}-->
