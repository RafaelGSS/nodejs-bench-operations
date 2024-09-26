## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,923,544|1961908|
|Using delete property (proto: null)|16,644,493|8339015|
|Using delete property (cached proto: null)|3,908,954|1954808|
|Using undefined assignment|68,852,768|34426412|
|Using undefined assignment (proto: null)|17,719,213|8860183|
|Using undefined property (cached proto: null)|69,436,591|34718333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:13:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3923544.4044092377,"samples":1961908},{"name":"Using delete property (proto: null)","opsSec":16644493.542584838,"samples":8339015},{"name":"Using delete property (cached proto: null)","opsSec":3908954.4641822996,"samples":1954808},{"name":"Using undefined assignment","opsSec":68852768.22925773,"samples":34426412},{"name":"Using undefined assignment (proto: null)","opsSec":17719213.93214856,"samples":8860183},{"name":"Using undefined property (cached proto: null)","opsSec":69436591.98059295,"samples":34718333}]}-->
