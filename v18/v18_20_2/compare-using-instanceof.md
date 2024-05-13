## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|308,926|154464|
|[True conditional] Using constructor name|303,606|151804|
|[True conditional] Check if property is valid then instanceof |308,166|154084|
|[False conditional] Using instanceof only|12,323,552|6161777|
|[False conditional] Using constructor name|16,171,625|8085813|
|[False conditional] Check if property is valid then instanceof |16,168,769|8084385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:46:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":308926.48346798547,"samples":154464},{"name":"[True conditional] Using constructor name","opsSec":303606.8303949438,"samples":151804},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":308166.95830365777,"samples":154084},{"name":"[False conditional] Using instanceof only","opsSec":12323552.442773154,"samples":6161777},{"name":"[False conditional] Using constructor name","opsSec":16171625.637572095,"samples":8085813},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16168769.722444674,"samples":8084385}]}-->
