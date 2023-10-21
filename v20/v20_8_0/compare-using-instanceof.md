## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,557|59|
|[True conditional] Using constructor name|126,362|90|
|[True conditional] Check if property is valid then instanceof |125,636|90|
|[False conditional] Using instanceof only|616,996,643|91|
|[False conditional] Using constructor name|621,757,676|89|
|[False conditional] Check if property is valid then instanceof |633,709,186|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":156556.8227807308,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":126362.10984656894,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":125636.30812340691,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":616996643.0776935,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":621757675.8649681,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":633709185.6713152,"samples":6}]}-->
