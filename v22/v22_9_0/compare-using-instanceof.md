## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|321,605|160803|
|[True conditional] Using constructor name|316,105|158053|
|[True conditional] Check if property is valid then instanceof |316,207|158104|
|[False conditional] Using instanceof only|14,881,972|7440987|
|[False conditional] Using constructor name|14,955,756|7477879|
|[False conditional] Check if property is valid then instanceof |14,815,601|7407801|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:26:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":321605.7440017025,"samples":160803},{"name":"[True conditional] Using constructor name","opsSec":316105.1642178422,"samples":158053},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":316207.95067146246,"samples":158104},{"name":"[False conditional] Using instanceof only","opsSec":14881972.482033422,"samples":7440987},{"name":"[False conditional] Using constructor name","opsSec":14955756.653887317,"samples":7477879},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14815601.377640612,"samples":7407801}]}-->
