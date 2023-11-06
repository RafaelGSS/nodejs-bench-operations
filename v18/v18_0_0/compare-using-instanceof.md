## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|236,877|51|
|[True conditional] Using constructor name|177,798|95|
|[True conditional] Check if property is valid then instanceof |181,312|95|
|[False conditional] Using instanceof only|846,043,950|99|
|[False conditional] Using constructor name|845,898,712|97|
|[False conditional] Check if property is valid then instanceof |845,752,112|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:37:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":236876.5284283063,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":177798.46649783952,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":181311.68317256894,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":846043950.2679107,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":845898712.3676172,"samples":11},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845752111.6147574,"samples":8}]}-->
