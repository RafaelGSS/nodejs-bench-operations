## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|244,350|53|
|[True conditional] Using constructor name|189,333|94|
|[True conditional] Check if property is valid then instanceof |193,859|95|
|[False conditional] Using instanceof only|821,025,533|97|
|[False conditional] Using constructor name|820,649,609|89|
|[False conditional] Check if property is valid then instanceof |822,401,271|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":244350.48383900916,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":189333.17785107042,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":193859.17534647367,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":821025533.1887647,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":820649608.7923503,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":822401271.4746181,"samples":7}]}-->
