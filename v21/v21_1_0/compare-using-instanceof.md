## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|235,871|50|
|[True conditional] Using constructor name|189,428|95|
|[True conditional] Check if property is valid then instanceof |191,553|97|
|[False conditional] Using instanceof only|847,578,347|92|
|[False conditional] Using constructor name|847,815,083|92|
|[False conditional] Check if property is valid then instanceof |848,268,609|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:46:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":235871.4802534363,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":189428.35128675215,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":191552.5031490521,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847578347.1467098,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":847815083.197936,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":848268608.7727288,"samples":6}]}-->
