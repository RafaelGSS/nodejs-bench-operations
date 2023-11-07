## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|242,012|50|
|[True conditional] Using constructor name|182,699|99|
|[True conditional] Check if property is valid then instanceof |185,372|95|
|[False conditional] Using instanceof only|848,781,357|95|
|[False conditional] Using constructor name|849,843,022|97|
|[False conditional] Check if property is valid then instanceof |849,258,607|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:38:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":242011.88526538163,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":182698.6580897176,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":185371.7823296182,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":848781357.438104,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":849843022.4887562,"samples":10},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":849258607.4868615,"samples":6}]}-->
