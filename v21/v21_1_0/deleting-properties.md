## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,874,583|95|
|Using delete property (proto: null)|13,965,148|98|
|Using delete property (cached proto: null)|2,901,961|97|
|Using undefined assignment|709,383,723|96|
|Using undefined assignment (proto: null)|15,203,266|94|
|Using undefined property (cached proto: null)|711,567,261|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:15:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2874582.511943404,"samples":4},{"name":"Using delete property (proto: null)","opsSec":13965147.723686738,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2901961.245361903,"samples":6},{"name":"Using undefined assignment","opsSec":709383723.4963546,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":15203265.655995462,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":711567261.0928358,"samples":8}]}-->
