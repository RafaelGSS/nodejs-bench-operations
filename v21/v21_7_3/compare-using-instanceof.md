## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|329,291|164646|
|[True conditional] Using constructor name|322,805|161403|
|[True conditional] Check if property is valid then instanceof |321,078|160540|
|[False conditional] Using instanceof only|15,312,170|7656086|
|[False conditional] Using constructor name|15,302,591|7651296|
|[False conditional] Check if property is valid then instanceof |15,271,920|7635961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:50:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":329291.0667891449,"samples":164646},{"name":"[True conditional] Using constructor name","opsSec":322805.7507939723,"samples":161403},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":321078.1383889419,"samples":160540},{"name":"[False conditional] Using instanceof only","opsSec":15312170.836283075,"samples":7656086},{"name":"[False conditional] Using constructor name","opsSec":15302591.632759055,"samples":7651296},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15271920.258912884,"samples":7635961}]}-->
