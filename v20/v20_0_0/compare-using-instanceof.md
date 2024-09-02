## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|252,412|126207|
|[True conditional] Using constructor name|264,241|132121|
|[True conditional] Check if property is valid then instanceof |275,685|137843|
|[False conditional] Using instanceof only|12,161,919|6080960|
|[False conditional] Using constructor name|15,462,879|7731440|
|[False conditional] Check if property is valid then instanceof |15,448,882|7724442|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:45:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":252412.6869381465,"samples":126207},{"name":"[True conditional] Using constructor name","opsSec":264241.4181518397,"samples":132121},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":275685.97023454646,"samples":137843},{"name":"[False conditional] Using instanceof only","opsSec":12161919.948310738,"samples":6080960},{"name":"[False conditional] Using constructor name","opsSec":15462879.943533957,"samples":7731440},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15448882.177622313,"samples":7724442}]}-->
