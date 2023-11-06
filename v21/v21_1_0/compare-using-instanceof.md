## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|231,220|49|
|[True conditional] Using constructor name|185,205|93|
|[True conditional] Check if property is valid then instanceof |185,891|93|
|[False conditional] Using instanceof only|847,103,378|100|
|[False conditional] Using constructor name|846,508,411|95|
|[False conditional] Check if property is valid then instanceof |848,261,881|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:44:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":231219.53187162467,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185205.1936055138,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":185891.28061579863,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847103377.5816537,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":846508411.4443091,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":848261880.5215658,"samples":7}]}-->
