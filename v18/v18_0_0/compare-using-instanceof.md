## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|392,757|196767|
|[True conditional] Using constructor name|320,605|160304|
|[True conditional] Check if property is valid then instanceof |322,167|161118|
|[False conditional] Using instanceof only|39,452,793|19727708|
|[False conditional] Using constructor name|105,521,557|52768615|
|[False conditional] Check if property is valid then instanceof |105,741,810|52870920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:08:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":392757.58580716397,"samples":196767},{"name":"[True conditional] Using constructor name","opsSec":320605.8647649407,"samples":160304},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":322167.0498080001,"samples":161118},{"name":"[False conditional] Using instanceof only","opsSec":39452793.80951224,"samples":19727708},{"name":"[False conditional] Using constructor name","opsSec":105521557.72720325,"samples":52768615},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":105741810.81526022,"samples":52870920}]}-->
