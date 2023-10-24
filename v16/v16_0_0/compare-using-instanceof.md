## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|295,758|88|
|[True conditional] Using constructor name|291,376|83|
|[True conditional] Check if property is valid then instanceof |295,042|83|
|[False conditional] Using instanceof only|597,504,842|95|
|[False conditional] Using constructor name|597,530,054|93|
|[False conditional] Check if property is valid then instanceof |598,254,873|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":295757.5800036129,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":291376.063662766,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":295042.30199481087,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":597504841.5619338,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":597530053.752214,"samples":10},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598254873.2192885,"samples":9}]}-->
