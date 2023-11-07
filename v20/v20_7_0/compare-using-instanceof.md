## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|227,863|52|
|[True conditional] Using constructor name|180,522|97|
|[True conditional] Check if property is valid then instanceof |180,180|94|
|[False conditional] Using instanceof only|855,347,893|97|
|[False conditional] Using constructor name|855,649,052|96|
|[False conditional] Check if property is valid then instanceof |856,062,244|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:42:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":227863.30548466943,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":180522.38099894827,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":180179.75801814257,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":855347892.9063548,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":855649051.5793012,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":856062244.3962877,"samples":9}]}-->
