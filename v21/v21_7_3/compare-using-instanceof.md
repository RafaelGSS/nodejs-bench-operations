## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|426,866|213467|
|[True conditional] Using constructor name|351,140|175571|
|[True conditional] Check if property is valid then instanceof |343,706|172190|
|[False conditional] Using instanceof only|93,583,673|46791846|
|[False conditional] Using constructor name|95,525,588|47766146|
|[False conditional] Check if property is valid then instanceof |95,824,032|47921762|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:10:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":426866.25888591236,"samples":213467},{"name":"[True conditional] Using constructor name","opsSec":351140.3011832229,"samples":175571},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":343706.49200582894,"samples":172190},{"name":"[False conditional] Using instanceof only","opsSec":93583673.65759996,"samples":46791846},{"name":"[False conditional] Using constructor name","opsSec":95525588.77838424,"samples":47766146},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":95824032.2419536,"samples":47921762}]}-->
