## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|311,807|155904|
|[True conditional] Using constructor name|309,804|154903|
|[True conditional] Check if property is valid then instanceof |315,328|157665|
|[False conditional] Using instanceof only|14,896,004|7448003|
|[False conditional] Using constructor name|21,040,787|10520394|
|[False conditional] Check if property is valid then instanceof |21,002,126|10501064|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:51:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":311807.0520087416,"samples":155904},{"name":"[True conditional] Using constructor name","opsSec":309804.1096966802,"samples":154903},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":315328.1280159026,"samples":157665},{"name":"[False conditional] Using instanceof only","opsSec":14896004.955863604,"samples":7448003},{"name":"[False conditional] Using constructor name","opsSec":21040787.297687955,"samples":10520394},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":21002126.417694103,"samples":10501064}]}-->
