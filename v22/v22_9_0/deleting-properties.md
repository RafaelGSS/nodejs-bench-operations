## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,961,853|1982256|
|Using delete property (proto: null)|15,462,617|7731453|
|Using delete property (cached proto: null)|3,992,229|1996116|
|Using undefined assignment|71,961,566|35989426|
|Using undefined assignment (proto: null)|17,399,068|8700056|
|Using undefined property (cached proto: null)|69,199,919|34721577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:58:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using delete property","opsSec":3961853.1052965615,"samples":1982256},{"name":"Using delete property (proto: null)","opsSec":15462617.18923614,"samples":7731453},{"name":"Using delete property (cached proto: null)","opsSec":3992229.0697038635,"samples":1996116},{"name":"Using undefined assignment","opsSec":71961566.5438699,"samples":35989426},{"name":"Using undefined assignment (proto: null)","opsSec":17399068.647449486,"samples":8700056},{"name":"Using undefined property (cached proto: null)","opsSec":69199919.05252713,"samples":34721577}]}-->
