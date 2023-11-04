## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|181,644|57|
|[True conditional] Using constructor name|148,511|93|
|[True conditional] Check if property is valid then instanceof |149,433|96|
|[False conditional] Using instanceof only|711,024,837|98|
|[False conditional] Using constructor name|709,262,433|93|
|[False conditional] Check if property is valid then instanceof |711,207,790|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:08:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":181644.4759846955,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":148510.87727933642,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":149433.02874965558,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":711024836.6365867,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":709262433.1540836,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":711207789.6975405,"samples":8}]}-->
