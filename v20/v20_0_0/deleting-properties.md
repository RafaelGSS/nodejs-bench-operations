## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,699,965|1349983|
|Using delete property (proto: null)|7,704,597|3852299|
|Using delete property (cached proto: null)|2,653,805|1326903|
|Using undefined assignment|14,514,607|7257304|
|Using undefined assignment (proto: null)|8,270,241|4135121|
|Using undefined property (cached proto: null)|14,414,995|7207498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:55:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2699965.2146542897,"samples":1349983},{"name":"Using delete property (proto: null)","opsSec":7704597.327457977,"samples":3852299},{"name":"Using delete property (cached proto: null)","opsSec":2653805.352226823,"samples":1326903},{"name":"Using undefined assignment","opsSec":14514607.323624287,"samples":7257304},{"name":"Using undefined assignment (proto: null)","opsSec":8270241.668848914,"samples":4135121},{"name":"Using undefined property (cached proto: null)","opsSec":14414995.389457367,"samples":7207498}]}-->
