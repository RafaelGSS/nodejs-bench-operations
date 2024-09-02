## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|324,507|162254|
|[True conditional] Using constructor name|318,153|159077|
|[True conditional] Check if property is valid then instanceof |319,808|159905|
|[False conditional] Using instanceof only|14,144,256|7072129|
|[False conditional] Using constructor name|13,822,249|6911125|
|[False conditional] Check if property is valid then instanceof |13,719,510|6859756|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:50:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":324507.9487275343,"samples":162254},{"name":"[True conditional] Using constructor name","opsSec":318153.47122904,"samples":159077},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":319808.4214256687,"samples":159905},{"name":"[False conditional] Using instanceof only","opsSec":14144256.783581207,"samples":7072129},{"name":"[False conditional] Using constructor name","opsSec":13822249.778857103,"samples":6911125},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13719510.682719298,"samples":6859756}]}-->
