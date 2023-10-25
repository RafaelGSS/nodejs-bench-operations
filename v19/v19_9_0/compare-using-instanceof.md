## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|196,998|56|
|[True conditional] Using constructor name|154,863|93|
|[True conditional] Check if property is valid then instanceof |154,594|88|
|[False conditional] Using instanceof only|989,929,682|95|
|[False conditional] Using constructor name|944,256,058|89|
|[False conditional] Check if property is valid then instanceof |983,327,764|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":196998.39555315176,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":154862.58316604438,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":154593.53932479725,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":989929681.515476,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":944256057.615183,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":983327764.0183756,"samples":6}]}-->
