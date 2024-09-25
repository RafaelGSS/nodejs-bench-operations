## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,525,246|1262624|
|Using delete property (proto: null)|7,593,544|3796773|
|Using delete property (cached proto: null)|2,539,233|1269617|
|Using undefined assignment|12,994,420|6497211|
|Using undefined assignment (proto: null)|8,299,317|4149659|
|Using undefined property (cached proto: null)|12,314,318|6158584|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:50:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2525246.761021604,"samples":1262624},{"name":"Using delete property (proto: null)","opsSec":7593544.610485677,"samples":3796773},{"name":"Using delete property (cached proto: null)","opsSec":2539233.7781940238,"samples":1269617},{"name":"Using undefined assignment","opsSec":12994420.896273622,"samples":6497211},{"name":"Using undefined assignment (proto: null)","opsSec":8299317.46025234,"samples":4149659},{"name":"Using undefined property (cached proto: null)","opsSec":12314318.443649624,"samples":6158584}]}-->
