## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,270,764|91|
|Using delete property (proto: null)|11,155,538|89|
|Using delete property (cached proto: null)|2,305,066|92|
|Using undefined assignment|584,533,460|95|
|Using undefined assignment (proto: null)|13,238,794|94|
|Using undefined property (cached proto: null)|586,252,558|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:15:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2270763.6922898716,"samples":8},{"name":"Using delete property (proto: null)","opsSec":11155537.515724763,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2305065.6738850167,"samples":4},{"name":"Using undefined assignment","opsSec":584533460.0797694,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":13238794.194433143,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":586252557.5578027,"samples":7}]}-->
