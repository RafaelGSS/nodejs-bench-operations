## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|279,729|139865|
|[True conditional] Using constructor name|269,649|134825|
|[True conditional] Check if property is valid then instanceof |276,429|138215|
|[False conditional] Using instanceof only|11,350,843|5675422|
|[False conditional] Using constructor name|15,033,422|7516743|
|[False conditional] Check if property is valid then instanceof |15,138,404|7569203|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:44:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":279729.7521748769,"samples":139865},{"name":"[True conditional] Using constructor name","opsSec":269649.58203067345,"samples":134825},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":276429.8142205015,"samples":138215},{"name":"[False conditional] Using instanceof only","opsSec":11350843.904472472,"samples":5675422},{"name":"[False conditional] Using constructor name","opsSec":15033422.955042426,"samples":7516743},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15138404.302392144,"samples":7569203}]}-->
