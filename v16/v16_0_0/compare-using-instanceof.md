## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|403,027|82|
|[True conditional] Using constructor name|397,053|82|
|[True conditional] Check if property is valid then instanceof |396,977|81|
|[False conditional] Using instanceof only|904,445,287|100|
|[False conditional] Using constructor name|902,897,436|94|
|[False conditional] Check if property is valid then instanceof |901,915,620|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":403026.8280751001,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":397052.518306871,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":396976.96255020285,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":904445286.5749096,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":902897435.7147623,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":901915619.5536512,"samples":6}]}-->
