## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|591,474,013|96|
|Using dot notation|596,079,743|95|
|Using define property (writable)|2,647,598|96|
|Using define property initialized (writable)|3,462,715|95|
|Using define property (getter)|1,407,888|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":591474012.7384559,"samples":6},{"name":"Using dot notation","opsSec":596079742.7008108,"samples":6},{"name":"Using define property (writable)","opsSec":2647597.84386132,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3462714.5357824177,"samples":5},{"name":"Using define property (getter)","opsSec":1407888.025319229,"samples":4}]}-->
