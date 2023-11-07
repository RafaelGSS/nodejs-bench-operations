## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|242,276|53|
|[True conditional] Using constructor name|188,282|98|
|[True conditional] Check if property is valid then instanceof |189,656|95|
|[False conditional] Using instanceof only|850,301,980|99|
|[False conditional] Using constructor name|849,596,078|97|
|[False conditional] Check if property is valid then instanceof |850,536,199|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:35:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":242275.95134254024,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":188281.58653305165,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":189656.43845615492,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":850301980.2601866,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":849596077.686597,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":850536199.2631985,"samples":6}]}-->
