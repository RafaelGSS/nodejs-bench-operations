## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|914,710,806|99|
|Using dot notation|911,900,880|96|
|Using define property (writable)|4,907,483|97|
|Using define property initialized (writable)|6,781,098|94|
|Using define property (getter)|2,642,257|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 02 2024 22:21:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":914710806.229172,"samples":8},{"name":"Using dot notation","opsSec":911900880.0957347,"samples":6},{"name":"Using define property (writable)","opsSec":4907482.911688087,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6781098.398627883,"samples":4},{"name":"Using define property (getter)","opsSec":2642256.761937855,"samples":4}]}-->
