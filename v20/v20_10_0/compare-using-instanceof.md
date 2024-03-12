## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|245,265|52|
|[True conditional] Using constructor name|196,568|93|
|[True conditional] Check if property is valid then instanceof |201,856|97|
|[False conditional] Using instanceof only|843,863,438|98|
|[False conditional] Using constructor name|842,125,617|94|
|[False conditional] Check if property is valid then instanceof |845,501,757|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":245264.83725095188,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":196568.00405147678,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":201855.65139103914,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":843863438.0169462,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":842125616.8175888,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845501756.7404281,"samples":5}]}-->
