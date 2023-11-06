## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|239,461|53|
|[True conditional] Using constructor name|185,341|95|
|[True conditional] Check if property is valid then instanceof |187,611|94|
|[False conditional] Using instanceof only|847,257,567|99|
|[False conditional] Using constructor name|846,674,089|95|
|[False conditional] Check if property is valid then instanceof |848,456,243|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:38:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":239461.3191451112,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185341.19326438144,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":187611.0665383362,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847257567.455571,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":846674088.9216318,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":848456242.8002301,"samples":6}]}-->
