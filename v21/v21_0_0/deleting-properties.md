## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,758,965|1379483|
|Using delete property (proto: null)|7,727,699|3863850|
|Using delete property (cached proto: null)|2,796,131|1398066|
|Using undefined assignment|12,390,992|6195497|
|Using undefined assignment (proto: null)|8,302,043|4151022|
|Using undefined property (cached proto: null)|11,967,305|5983653|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:53:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2758965.0541052357,"samples":1379483},{"name":"Using delete property (proto: null)","opsSec":7727699.305721655,"samples":3863850},{"name":"Using delete property (cached proto: null)","opsSec":2796131.6293062926,"samples":1398066},{"name":"Using undefined assignment","opsSec":12390992.764895674,"samples":6195497},{"name":"Using undefined assignment (proto: null)","opsSec":8302043.229966579,"samples":4151022},{"name":"Using undefined property (cached proto: null)","opsSec":11967305.029300675,"samples":5983653}]}-->
