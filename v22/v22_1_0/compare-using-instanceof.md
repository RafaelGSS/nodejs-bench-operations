## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|323,425|161713|
|[True conditional] Using constructor name|323,581|161791|
|[True conditional] Check if property is valid then instanceof |328,788|164395|
|[False conditional] Using instanceof only|16,185,053|8092527|
|[False conditional] Using constructor name|16,017,031|8008516|
|[False conditional] Check if property is valid then instanceof |16,096,937|8048469|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:43:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":323425.3001076526,"samples":161713},{"name":"[True conditional] Using constructor name","opsSec":323581.3418355033,"samples":161791},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":328788.3659218946,"samples":164395},{"name":"[False conditional] Using instanceof only","opsSec":16185053.838156208,"samples":8092527},{"name":"[False conditional] Using constructor name","opsSec":16017031.711687593,"samples":8008516},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16096937.25958725,"samples":8048469}]}-->
