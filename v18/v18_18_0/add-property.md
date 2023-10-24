## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|695,281,859|84|
|Using dot notation|588,071,604|81|
|Using define property (writable)|2,320,144|88|
|Using define property initialized (writable)|2,901,227|83|
|Using define property (getter)|1,140,204|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":695281858.900967,"samples":8},{"name":"Using dot notation","opsSec":588071603.9380878,"samples":7},{"name":"Using define property (writable)","opsSec":2320143.7917821673,"samples":4},{"name":"Using define property initialized (writable)","opsSec":2901227.27833272,"samples":5},{"name":"Using define property (getter)","opsSec":1140204.457488914,"samples":4}]}-->
