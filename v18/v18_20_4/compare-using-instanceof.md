## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|399,390|200233|
|[True conditional] Using constructor name|314,836|157419|
|[True conditional] Check if property is valid then instanceof |313,145|156653|
|[False conditional] Using instanceof only|43,861,845|21930939|
|[False conditional] Using constructor name|106,372,307|53186165|
|[False conditional] Check if property is valid then instanceof |106,394,754|53199371|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:48:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":399390.99122021184,"samples":200233},{"name":"[True conditional] Using constructor name","opsSec":314836.8269179829,"samples":157419},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313145.36957751226,"samples":156653},{"name":"[False conditional] Using instanceof only","opsSec":43861845.27906342,"samples":21930939},{"name":"[False conditional] Using constructor name","opsSec":106372307.87455997,"samples":53186165},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":106394754.75017099,"samples":53199371}]}-->
