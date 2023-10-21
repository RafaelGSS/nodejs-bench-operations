## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,099,664|84|
|Using delete property (proto: null)|11,276,819|85|
|Using delete property (cached proto: null)|2,173,249|89|
|Using undefined assignment|725,048,442|89|
|Using undefined assignment (proto: null)|11,962,224|87|
|Using undefined property (cached proto: null)|605,342,841|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2099664.3185698134,"samples":4},{"name":"Using delete property (proto: null)","opsSec":11276819.448321722,"samples":4},{"name":"Using delete property (cached proto: null)","opsSec":2173248.686660263,"samples":6},{"name":"Using undefined assignment","opsSec":725048442.2571164,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":11962223.710665952,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":605342840.5752105,"samples":8}]}-->
