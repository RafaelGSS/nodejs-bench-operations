## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|178,898|59|
|[True conditional] Using constructor name|145,136|91|
|[True conditional] Check if property is valid then instanceof |148,825|98|
|[False conditional] Using instanceof only|716,499,211|97|
|[False conditional] Using constructor name|716,907,804|95|
|[False conditional] Check if property is valid then instanceof |718,231,997|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":178898.026352466,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":145135.8493637828,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":148825.13364590824,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":716499210.6605294,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":716907803.9234965,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":718231997.4219474,"samples":9}]}-->
