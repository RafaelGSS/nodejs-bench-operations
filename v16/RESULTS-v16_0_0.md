## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|587,189,594|88|
|Using dot notation|598,185,021|88|
|Using define property (writable)|2,433,001|86|
|Using define property initialized (writable)|2,989,161|87|
|Using define property (getter)|1,185,578|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":587189593.6648036,"samples":8},{"name":"Using dot notation","opsSec":598185021.4888043,"samples":6},{"name":"Using define property (writable)","opsSec":2433000.686322029,"samples":6},{"name":"Using define property initialized (writable)","opsSec":2989161.4318045694,"samples":5},{"name":"Using define property (getter)","opsSec":1185577.810211867,"samples":4}]}-->
