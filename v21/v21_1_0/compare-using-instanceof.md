## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|159,919|55|
|[True conditional] Using constructor name|128,491|94|
|[True conditional] Check if property is valid then instanceof |128,288|92|
|[False conditional] Using instanceof only|595,551,213|95|
|[False conditional] Using constructor name|598,311,523|89|
|[False conditional] Check if property is valid then instanceof |603,818,011|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":159918.83193254686,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":128491.4071532465,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":128288.27432291608,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":595551212.7071731,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":598311523.317196,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":603818011.352398,"samples":7}]}-->
