## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|151,499|54|
|[True conditional] Using constructor name|123,753|89|
|[True conditional] Check if property is valid then instanceof |124,972|84|
|[False conditional] Using instanceof only|719,953,814|89|
|[False conditional] Using constructor name|730,197,749|89|
|[False conditional] Check if property is valid then instanceof |742,985,756|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":151499.38728375162,"samples":5},{"name":"[True conditional] Using constructor name","opsSec":123753.0101309557,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":124971.66809030065,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":719953814.0725436,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":730197748.7382903,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":742985756.3524308,"samples":5}]}-->
