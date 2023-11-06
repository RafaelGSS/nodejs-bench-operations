## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|846,813,191|97|
|Using dot notation|845,977,879|96|
|Using define property (writable)|4,578,594|100|
|Using define property initialized (writable)|5,807,308|99|
|Using define property (getter)|2,220,493|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:50:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":846813191.0022922,"samples":7},{"name":"Using dot notation","opsSec":845977878.7036251,"samples":6},{"name":"Using define property (writable)","opsSec":4578594.019319121,"samples":9},{"name":"Using define property initialized (writable)","opsSec":5807308.265824137,"samples":5},{"name":"Using define property (getter)","opsSec":2220493.212669971,"samples":4}]}-->
