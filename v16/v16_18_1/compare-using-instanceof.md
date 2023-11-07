## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|240,032|53|
|[True conditional] Using constructor name|187,269|99|
|[True conditional] Check if property is valid then instanceof |189,396|98|
|[False conditional] Using instanceof only|850,261,865|98|
|[False conditional] Using constructor name|850,072,858|89|
|[False conditional] Check if property is valid then instanceof |851,545,352|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:36:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":240031.82531861117,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":187269.48962319206,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":189396.2863907056,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":850261864.8954334,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":850072857.8457361,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":851545351.9906434,"samples":6}]}-->
