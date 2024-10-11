## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|388,014|194694|
|[True conditional] Using constructor name|309,852|154928|
|[True conditional] Check if property is valid then instanceof |313,637|156823|
|[False conditional] Using instanceof only|96,723,406|48375828|
|[False conditional] Using constructor name|96,631,036|48334863|
|[False conditional] Check if property is valid then instanceof |96,619,138|48310127|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:48:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":388014.8867106701,"samples":194694},{"name":"[True conditional] Using constructor name","opsSec":309852.5339895548,"samples":154928},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313637.07890692755,"samples":156823},{"name":"[False conditional] Using instanceof only","opsSec":96723406.76837242,"samples":48375828},{"name":"[False conditional] Using constructor name","opsSec":96631036.0927209,"samples":48334863},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96619138.43542762,"samples":48310127}]}-->
