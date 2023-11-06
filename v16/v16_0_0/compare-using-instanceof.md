## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|396,590|81|
|[True conditional] Using constructor name|390,020|82|
|[True conditional] Check if property is valid then instanceof |392,530|84|
|[False conditional] Using instanceof only|843,262,338|100|
|[False conditional] Using constructor name|843,739,169|96|
|[False conditional] Check if property is valid then instanceof |845,312,956|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:35:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":396589.8018229724,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":390020.1024472334,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":392529.9343802611,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":843262337.6459177,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":843739169.4763496,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845312955.6528332,"samples":6}]}-->
