## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,295,853|92|
|Using delete property (proto: null)|20,756,490|98|
|Using delete property (cached proto: null)|3,336,686|98|
|Using undefined assignment|845,539,467|100|
|Using undefined assignment (proto: null)|23,061,689|94|
|Using undefined property (cached proto: null)|841,999,299|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:17:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3295853.061550416,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20756490.46128737,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":3336685.9369288282,"samples":5},{"name":"Using undefined assignment","opsSec":845539466.6653793,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":23061689.04949238,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":841999298.7210851,"samples":8}]}-->
