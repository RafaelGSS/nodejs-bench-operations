## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|247,080|54|
|[True conditional] Using constructor name|199,867|94|
|[True conditional] Check if property is valid then instanceof |202,449|94|
|[False conditional] Using instanceof only|847,347,751|94|
|[False conditional] Using constructor name|844,662,677|96|
|[False conditional] Check if property is valid then instanceof |846,754,835|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":247080.45280150656,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":199866.83856870598,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":202449.4666521109,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847347751.2131714,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":844662677.2628103,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":846754835.2887367,"samples":6}]}-->
