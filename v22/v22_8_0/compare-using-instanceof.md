## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|427,272|213672|
|[True conditional] Using constructor name|340,710|170371|
|[True conditional] Check if property is valid then instanceof |342,372|171200|
|[False conditional] Using instanceof only|96,175,779|48088628|
|[False conditional] Using constructor name|94,154,957|47109770|
|[False conditional] Check if property is valid then instanceof |96,972,172|48492544|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:11:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":427272.967578232,"samples":213672},{"name":"[True conditional] Using constructor name","opsSec":340710.45770724636,"samples":170371},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":342372.3897210033,"samples":171200},{"name":"[False conditional] Using instanceof only","opsSec":96175779.70178159,"samples":48088628},{"name":"[False conditional] Using constructor name","opsSec":94154957.6080973,"samples":47109770},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96972172.47029303,"samples":48492544}]}-->
