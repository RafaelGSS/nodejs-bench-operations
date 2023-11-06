## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|236,838|53|
|[True conditional] Using constructor name|180,552|97|
|[True conditional] Check if property is valid then instanceof |183,346|98|
|[False conditional] Using instanceof only|845,692,703|99|
|[False conditional] Using constructor name|845,467,700|94|
|[False conditional] Check if property is valid then instanceof |846,746,088|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:39:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":236837.913951956,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":180551.66446491444,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":183346.02379883986,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":845692703.1203612,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":845467699.8447635,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":846746088.1969482,"samples":6}]}-->
