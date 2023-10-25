## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,675,931|92|
|Object.create({})|1,359,677|76|
|Cached Empty.prototype|706,727,669|97|
|Empty.prototype|1,445,485|78|
|Empty class|1,004,790|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":47675930.79136651,"samples":6},{"name":"Object.create({})","opsSec":1359676.9052763954,"samples":3},{"name":"Cached Empty.prototype","opsSec":706727669.0419743,"samples":7},{"name":"Empty.prototype","opsSec":1445484.8108577689,"samples":3},{"name":"Empty class","opsSec":1004789.5263879414,"samples":3}]}-->
