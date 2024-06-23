## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|321,096|160549|
|[True conditional] Using constructor name|313,484|156743|
|[True conditional] Check if property is valid then instanceof |318,399|159200|
|[False conditional] Using instanceof only|19,757,445|9878723|
|[False conditional] Using constructor name|19,624,379|9812190|
|[False conditional] Check if property is valid then instanceof |19,717,698|9858850|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:59:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":321096.8427669724,"samples":160549},{"name":"[True conditional] Using constructor name","opsSec":313484.06266856473,"samples":156743},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":318399.2199218999,"samples":159200},{"name":"[False conditional] Using instanceof only","opsSec":19757445.762893375,"samples":9878723},{"name":"[False conditional] Using constructor name","opsSec":19624379.018794175,"samples":9812190},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19717698.462057948,"samples":9858850}]}-->
