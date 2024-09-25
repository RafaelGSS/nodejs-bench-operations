## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|312,139|156070|
|[True conditional] Using constructor name|304,775|152389|
|[True conditional] Check if property is valid then instanceof |308,705|154353|
|[False conditional] Using instanceof only|15,005,222|7502612|
|[False conditional] Using constructor name|13,964,020|6982011|
|[False conditional] Check if property is valid then instanceof |13,360,419|6680210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:23:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":312139.7465422038,"samples":156070},{"name":"[True conditional] Using constructor name","opsSec":304775.4654872026,"samples":152389},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":308705.9203537501,"samples":154353},{"name":"[False conditional] Using instanceof only","opsSec":15005222.259343408,"samples":7502612},{"name":"[False conditional] Using constructor name","opsSec":13964020.408146245,"samples":6982011},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13360419.011348976,"samples":6680210}]}-->
