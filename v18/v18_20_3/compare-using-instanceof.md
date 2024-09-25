## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|253,769|126885|
|[True conditional] Using constructor name|259,006|129504|
|[True conditional] Check if property is valid then instanceof |266,374|133188|
|[False conditional] Using instanceof only|10,712,546|5356274|
|[False conditional] Using constructor name|14,182,466|7091234|
|[False conditional] Check if property is valid then instanceof |12,976,662|6488332|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:17:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":253769.16762062954,"samples":126885},{"name":"[True conditional] Using constructor name","opsSec":259006.13824053586,"samples":129504},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":266374.74111368303,"samples":133188},{"name":"[False conditional] Using instanceof only","opsSec":10712546.90789554,"samples":5356274},{"name":"[False conditional] Using constructor name","opsSec":14182466.594118861,"samples":7091234},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":12976662.350576611,"samples":6488332}]}-->
