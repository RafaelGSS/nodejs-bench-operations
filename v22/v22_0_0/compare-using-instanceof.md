## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|343,290|171646|
|[True conditional] Using constructor name|332,714|166358|
|[True conditional] Check if property is valid then instanceof |339,350|169676|
|[False conditional] Using instanceof only|16,200,824|8100413|
|[False conditional] Using constructor name|16,133,671|8066836|
|[False conditional] Check if property is valid then instanceof |16,221,320|8110661|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:43:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":343290.178502329,"samples":171646},{"name":"[True conditional] Using constructor name","opsSec":332714.25657723006,"samples":166358},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":339350.0921738791,"samples":169676},{"name":"[False conditional] Using instanceof only","opsSec":16200824.736390555,"samples":8100413},{"name":"[False conditional] Using constructor name","opsSec":16133671.580497459,"samples":8066836},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16221320.832042493,"samples":8110661}]}-->
