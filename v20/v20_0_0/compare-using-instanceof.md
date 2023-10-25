## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,945|55|
|[True conditional] Using constructor name|129,128|94|
|[True conditional] Check if property is valid then instanceof |129,987|93|
|[False conditional] Using instanceof only|596,944,778|96|
|[False conditional] Using constructor name|597,348,310|96|
|[False conditional] Check if property is valid then instanceof |598,320,114|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":165944.63509854447,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":129128.1646339486,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":129987.3194858227,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":596944777.6304117,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":597348310.3874255,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598320113.5361209,"samples":6}]}-->
