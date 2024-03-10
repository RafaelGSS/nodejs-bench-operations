## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|254,996|55|
|[True conditional] Using constructor name|206,651|98|
|[True conditional] Check if property is valid then instanceof |206,970|98|
|[False conditional] Using instanceof only|824,148,309|95|
|[False conditional] Using constructor name|824,141,905|100|
|[False conditional] Check if property is valid then instanceof |825,144,967|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":254996.40490013588,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":206650.95018180675,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":206970.13723244166,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":824148309.397934,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":824141904.8600157,"samples":9},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":825144967.3854347,"samples":8}]}-->
