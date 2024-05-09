## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,918,909|7959455|
|Using dot notation|16,274,031|8137016|
|Using define property (writable)|3,368,166|1684084|
|Using define property initialized (writable)|4,283,236|2141619|
|Using define property (getter)|2,046,571|1023286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:25:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15918909.521784162,"samples":7959455},{"name":"Using dot notation","opsSec":16274031.511116035,"samples":8137016},{"name":"Using define property (writable)","opsSec":3368166.5802367893,"samples":1684084},{"name":"Using define property initialized (writable)","opsSec":4283236.980839131,"samples":2141619},{"name":"Using define property (getter)","opsSec":2046571.9756029607,"samples":1023286}]}-->
