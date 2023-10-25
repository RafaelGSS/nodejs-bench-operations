## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|178,809|56|
|[True conditional] Using constructor name|145,021|94|
|[True conditional] Check if property is valid then instanceof |144,684|93|
|[False conditional] Using instanceof only|717,240,089|94|
|[False conditional] Using constructor name|716,919,831|95|
|[False conditional] Check if property is valid then instanceof |714,261,694|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":178809.23780410583,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":145020.68869573664,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":144683.95467273841,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":717240089.3303782,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":716919831.437428,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":714261693.8423669,"samples":6}]}-->
