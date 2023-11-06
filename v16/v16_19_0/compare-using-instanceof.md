## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|236,688|53|
|[True conditional] Using constructor name|183,579|94|
|[True conditional] Check if property is valid then instanceof |186,479|97|
|[False conditional] Using instanceof only|847,060,070|100|
|[False conditional] Using constructor name|845,702,523|98|
|[False conditional] Check if property is valid then instanceof |847,710,499|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:35:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":236687.78199815727,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":183579.48473759982,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":186479.1872003973,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847060069.7962646,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":845702522.7899752,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":847710498.9695412,"samples":6}]}-->
