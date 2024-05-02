## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|910,301,788|97|
|Using dot notation|909,929,161|99|
|Using define property (writable)|4,880,903|97|
|Using define property initialized (writable)|6,717,091|97|
|Using define property (getter)|2,682,468|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 02 2024 22:23:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":910301788.1260535,"samples":6},{"name":"Using dot notation","opsSec":909929160.5845934,"samples":6},{"name":"Using define property (writable)","opsSec":4880902.714310573,"samples":7},{"name":"Using define property initialized (writable)","opsSec":6717091.194774127,"samples":5},{"name":"Using define property (getter)","opsSec":2682468.0350712826,"samples":4}]}-->
