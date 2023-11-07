## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|239,382|53|
|[True conditional] Using constructor name|179,178|96|
|[True conditional] Check if property is valid then instanceof |182,951|95|
|[False conditional] Using instanceof only|848,636,639|92|
|[False conditional] Using constructor name|849,223,028|100|
|[False conditional] Check if property is valid then instanceof |848,994,689|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:40:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":239382.11775233137,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":179177.69642259303,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":182950.89179020788,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":848636639.3129746,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":849223027.9564385,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":848994689.0563283,"samples":9}]}-->
