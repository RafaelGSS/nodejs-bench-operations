## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|181,320|62|
|[True conditional] Using constructor name|147,048|95|
|[True conditional] Check if property is valid then instanceof |148,326|96|
|[False conditional] Using instanceof only|718,306,226|96|
|[False conditional] Using constructor name|717,501,939|94|
|[False conditional] Check if property is valid then instanceof |718,967,558|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":181319.67023824682,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":147047.94090217812,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":148326.1491487359,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":718306226.1584672,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":717501938.6842595,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":718967557.7443843,"samples":7}]}-->
