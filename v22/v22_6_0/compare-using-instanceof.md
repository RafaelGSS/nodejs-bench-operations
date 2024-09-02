## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|319,478|159740|
|[True conditional] Using constructor name|317,549|158775|
|[True conditional] Check if property is valid then instanceof |315,707|157855|
|[False conditional] Using instanceof only|14,095,396|7047699|
|[False conditional] Using constructor name|14,108,048|7054025|
|[False conditional] Check if property is valid then instanceof |13,273,049|6636525|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:51:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":319478.8479590388,"samples":159740},{"name":"[True conditional] Using constructor name","opsSec":317549.7815257283,"samples":158775},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":315707.86770903453,"samples":157855},{"name":"[False conditional] Using instanceof only","opsSec":14095396.59057396,"samples":7047699},{"name":"[False conditional] Using constructor name","opsSec":14108048.560789991,"samples":7054025},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13273049.575216107,"samples":6636525}]}-->
