## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|846,272,049|96|
|Using dot notation|845,850,382|100|
|Using define property (writable)|4,567,266|93|
|Using define property initialized (writable)|5,822,557|96|
|Using define property (getter)|2,226,991|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:49:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":846272049.4379532,"samples":6},{"name":"Using dot notation","opsSec":845850381.52686,"samples":10},{"name":"Using define property (writable)","opsSec":4567266.093081193,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5822556.6862805225,"samples":6},{"name":"Using define property (getter)","opsSec":2226991.235838603,"samples":4}]}-->
