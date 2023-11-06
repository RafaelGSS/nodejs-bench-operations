## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|227,819|52|
|[True conditional] Using constructor name|181,006|98|
|[True conditional] Check if property is valid then instanceof |181,013|95|
|[False conditional] Using instanceof only|852,291,754|99|
|[False conditional] Using constructor name|851,637,891|99|
|[False conditional] Check if property is valid then instanceof |852,657,143|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:41:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":227818.89604480373,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":181005.66005299587,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":181013.3968355075,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":852291754.0837125,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":851637890.7073481,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":852657142.5204705,"samples":6}]}-->
