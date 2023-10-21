## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,609,850|90|
|Using replaceAll()|1,484,693|89|
|Using replaceAll(//g)|1,446,895|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1609849.8984362823,"samples":6},{"name":"Using replaceAll()","opsSec":1484692.5743101886,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1446895.4713807944,"samples":4}]}-->
