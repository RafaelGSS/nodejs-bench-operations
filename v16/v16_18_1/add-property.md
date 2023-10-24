## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|578,420,055|90|
|Using dot notation|610,496,354|91|
|Using define property (writable)|2,621,369|91|
|Using define property initialized (writable)|3,200,454|90|
|Using define property (getter)|1,345,349|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":578420054.7192351,"samples":5},{"name":"Using dot notation","opsSec":610496353.9883949,"samples":7},{"name":"Using define property (writable)","opsSec":2621369.2016900238,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3200454.0926870955,"samples":5},{"name":"Using define property (getter)","opsSec":1345348.8107370017,"samples":4}]}-->
