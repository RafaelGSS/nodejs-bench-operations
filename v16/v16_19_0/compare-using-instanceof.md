## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,373|54|
|[True conditional] Using constructor name|133,550|94|
|[True conditional] Check if property is valid then instanceof |135,241|90|
|[False conditional] Using instanceof only|595,296,323|95|
|[False conditional] Using constructor name|595,532,657|95|
|[False conditional] Check if property is valid then instanceof |595,992,759|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":170373.00774019177,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":133550.03797800868,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":135241.38072361427,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":595296322.6399038,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":595532657.2645907,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":595992759.4683163,"samples":6}]}-->
