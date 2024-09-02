## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|303,253|151627|
|[True conditional] Using constructor name|295,621|147811|
|[True conditional] Check if property is valid then instanceof |298,156|149079|
|[False conditional] Using instanceof only|16,255,318|8127660|
|[False conditional] Using constructor name|16,035,359|8017680|
|[False conditional] Check if property is valid then instanceof |16,396,110|8198056|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:47:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":303253.95447809284,"samples":151627},{"name":"[True conditional] Using constructor name","opsSec":295621.69668170775,"samples":147811},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":298156.7555122719,"samples":149079},{"name":"[False conditional] Using instanceof only","opsSec":16255318.44012852,"samples":8127660},{"name":"[False conditional] Using constructor name","opsSec":16035359.200622857,"samples":8017680},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16396110.595810363,"samples":8198056}]}-->
