## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|48,099,012|24052301|
|Using Object.getOwnPropertyNames()|41,274,882|20639464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:26:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":48099012.79851478,"samples":24052301},{"name":"Using Object.getOwnPropertyNames()","opsSec":41274882.648751594,"samples":20639464}]}-->
