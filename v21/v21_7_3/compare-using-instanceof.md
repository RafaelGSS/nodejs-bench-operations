## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|309,497|154749|
|[True conditional] Using constructor name|302,955|151478|
|[True conditional] Check if property is valid then instanceof |303,405|151704|
|[False conditional] Using instanceof only|14,638,744|7319373|
|[False conditional] Using constructor name|14,208,700|7104351|
|[False conditional] Check if property is valid then instanceof |14,682,372|7341187|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:49:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":309497.99009571865,"samples":154749},{"name":"[True conditional] Using constructor name","opsSec":302955.01539624686,"samples":151478},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":303405.9016446964,"samples":151704},{"name":"[False conditional] Using instanceof only","opsSec":14638744.858082881,"samples":7319373},{"name":"[False conditional] Using constructor name","opsSec":14208700.834837237,"samples":7104351},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14682372.59042317,"samples":7341187}]}-->
