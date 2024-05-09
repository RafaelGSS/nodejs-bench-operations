## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,983,939|1491970|
|Using delete property (proto: null)|8,701,295|4350648|
|Using delete property (cached proto: null)|2,909,106|1454554|
|Using undefined assignment|15,232,898|7616450|
|Using undefined assignment (proto: null)|9,325,026|4662514|
|Using undefined property (cached proto: null)|15,252,661|7626331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:24:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2983939.4330508504,"samples":1491970},{"name":"Using delete property (proto: null)","opsSec":8701295.582340742,"samples":4350648},{"name":"Using delete property (cached proto: null)","opsSec":2909106.673446622,"samples":1454554},{"name":"Using undefined assignment","opsSec":15232898.293929055,"samples":7616450},{"name":"Using undefined assignment (proto: null)","opsSec":9325026.582618447,"samples":4662514},{"name":"Using undefined property (cached proto: null)","opsSec":15252661.633907808,"samples":7626331}]}-->
