## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|315,821|157911|
|[True conditional] Using constructor name|322,054|161028|
|[True conditional] Check if property is valid then instanceof |325,660|162831|
|[False conditional] Using instanceof only|16,429,710|8214856|
|[False conditional] Using constructor name|16,563,222|8281612|
|[False conditional] Check if property is valid then instanceof |16,524,490|8262246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:49:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":315821.0315222484,"samples":157911},{"name":"[True conditional] Using constructor name","opsSec":322054.5494006759,"samples":161028},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":325660.5039647602,"samples":162831},{"name":"[False conditional] Using instanceof only","opsSec":16429710.15894037,"samples":8214856},{"name":"[False conditional] Using constructor name","opsSec":16563222.23875496,"samples":8281612},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16524490.65260701,"samples":8262246}]}-->
