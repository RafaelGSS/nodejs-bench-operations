## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|233,552|52|
|[True conditional] Using constructor name|175,762|94|
|[True conditional] Check if property is valid then instanceof |180,088|99|
|[False conditional] Using instanceof only|846,036,579|96|
|[False conditional] Using constructor name|845,422,141|96|
|[False conditional] Check if property is valid then instanceof |845,131,336|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:41:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":233552.34208175793,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":175762.40984743758,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":180088.04806120496,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":846036579.1676095,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":845422140.9071147,"samples":9},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845131336.3567692,"samples":8}]}-->
