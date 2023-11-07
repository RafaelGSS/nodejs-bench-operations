## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,429,695|98|
|Using delete property (proto: null)|23,295,059|99|
|Using delete property (cached proto: null)|3,433,116|96|
|Using undefined assignment|847,172,484|101|
|Using undefined assignment (proto: null)|25,126,245|96|
|Using undefined property (cached proto: null)|845,531,595|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:32:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3429694.680007303,"samples":5},{"name":"Using delete property (proto: null)","opsSec":23295059.190903496,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3433115.977368559,"samples":6},{"name":"Using undefined assignment","opsSec":847172483.5395938,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":25126244.763459645,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":845531594.689372,"samples":7}]}-->
