## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,921,734|1961478|
|Using delete property (proto: null)|17,110,189|8556473|
|Using delete property (cached proto: null)|3,953,556|1977073|
|Using undefined assignment|70,602,966|35307295|
|Using undefined assignment (proto: null)|18,395,249|9200595|
|Using undefined property (cached proto: null)|74,419,301|37209756|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:41:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1961478,"opsSec":3921734.379740711},{"name":"Using delete property (proto: null)","samples":8556473,"opsSec":17110189.03524075},{"name":"Using delete property (cached proto: null)","samples":1977073,"opsSec":3953556.999078277},{"name":"Using undefined assignment","samples":35307295,"opsSec":70602966.7747858},{"name":"Using undefined assignment (proto: null)","samples":9200595,"opsSec":18395249.58526093},{"name":"Using undefined property (cached proto: null)","samples":37209756,"opsSec":74419301.0957007}]}-->
