## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,429,992|98|
|Using delete property (proto: null)|24,582,512|98|
|Using delete property (cached proto: null)|3,456,436|96|
|Using undefined assignment|846,531,141|99|
|Using undefined assignment (proto: null)|27,482,903|94|
|Using undefined property (cached proto: null)|843,711,770|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3429991.608308004,"samples":6},{"name":"Using delete property (proto: null)","opsSec":24582511.731827863,"samples":8},{"name":"Using delete property (cached proto: null)","opsSec":3456435.781517944,"samples":5},{"name":"Using undefined assignment","opsSec":846531141.348624,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":27482903.287215903,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":843711770.2390463,"samples":9}]}-->
