## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|845,106,670|98|
|Using dot notation|845,004,838|95|
|Using define property (writable)|4,702,372|98|
|Using define property initialized (writable)|5,892,211|99|
|Using define property (getter)|2,301,286|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:51:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":845106669.7707736,"samples":6},{"name":"Using dot notation","opsSec":845004838.4429775,"samples":6},{"name":"Using define property (writable)","opsSec":4702372.098700055,"samples":6},{"name":"Using define property initialized (writable)","opsSec":5892211.339567156,"samples":5},{"name":"Using define property (getter)","opsSec":2301285.970362399,"samples":5}]}-->
