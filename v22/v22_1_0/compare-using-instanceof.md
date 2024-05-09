## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|328,931|164466|
|[True conditional] Using constructor name|329,871|164936|
|[True conditional] Check if property is valid then instanceof |335,891|167946|
|[False conditional] Using instanceof only|16,180,357|8090179|
|[False conditional] Using constructor name|16,115,136|8057569|
|[False conditional] Check if property is valid then instanceof |16,176,914|8088458|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:57:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":328931.85329639114,"samples":164466},{"name":"[True conditional] Using constructor name","opsSec":329871.90961514344,"samples":164936},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":335891.8018238758,"samples":167946},{"name":"[False conditional] Using instanceof only","opsSec":16180357.546918271,"samples":8090179},{"name":"[False conditional] Using constructor name","opsSec":16115136.291759301,"samples":8057569},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16176914.058815088,"samples":8088458}]}-->
