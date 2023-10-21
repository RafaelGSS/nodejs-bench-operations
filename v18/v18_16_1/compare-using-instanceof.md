## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|178,778|59|
|[True conditional] Using constructor name|142,469|93|
|[True conditional] Check if property is valid then instanceof |142,795|92|
|[False conditional] Using instanceof only|709,975,328|94|
|[False conditional] Using constructor name|710,023,130|95|
|[False conditional] Check if property is valid then instanceof |707,952,581|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":178778.27646198575,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":142469.4403113874,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":142794.8981362363,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":709975328.2270123,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":710023130.1245688,"samples":10},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":707952581.0012897,"samples":8}]}-->
