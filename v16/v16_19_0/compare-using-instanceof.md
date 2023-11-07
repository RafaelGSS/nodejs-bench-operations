## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|243,024|53|
|[True conditional] Using constructor name|185,997|96|
|[True conditional] Check if property is valid then instanceof |188,506|97|
|[False conditional] Using instanceof only|848,727,847|94|
|[False conditional] Using constructor name|848,006,938|100|
|[False conditional] Check if property is valid then instanceof |847,825,648|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:37:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":243024.45842123806,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185997.1938203462,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":188505.60589971283,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":848727846.7789552,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":848006938.415337,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":847825647.7346226,"samples":6}]}-->
