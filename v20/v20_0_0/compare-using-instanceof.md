## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|228,102|57|
|[True conditional] Using constructor name|182,100|95|
|[True conditional] Check if property is valid then instanceof |183,589|95|
|[False conditional] Using instanceof only|856,342,342|98|
|[False conditional] Using constructor name|856,111,336|95|
|[False conditional] Check if property is valid then instanceof |857,024,277|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:41:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":228101.9062307561,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":182100.05733934682,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":183589.11988050034,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":856342341.5044354,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":856111336.4859843,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":857024276.9298611,"samples":7}]}-->
