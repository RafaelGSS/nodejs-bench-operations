## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,070|59|
|[True conditional] Using constructor name|148,212|94|
|[True conditional] Check if property is valid then instanceof |149,171|94|
|[False conditional] Using instanceof only|715,863,366|97|
|[False conditional] Using constructor name|714,876,956|95|
|[False conditional] Check if property is valid then instanceof |713,021,005|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":183069.89267138712,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":148211.549450618,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":149170.53749466632,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":715863365.6870154,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":714876955.8145792,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":713021004.8283935,"samples":10}]}-->
