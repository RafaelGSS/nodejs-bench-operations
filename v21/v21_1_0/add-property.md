## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|846,542,575|97|
|Using dot notation|677,472,523|98|
|Using define property (writable)|4,477,970|97|
|Using define property initialized (writable)|6,372,641|96|
|Using define property (getter)|2,416,414|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:57:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":846542575.1517271,"samples":7},{"name":"Using dot notation","opsSec":677472523.3702389,"samples":6},{"name":"Using define property (writable)","opsSec":4477969.738210874,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6372640.990020351,"samples":6},{"name":"Using define property (getter)","opsSec":2416414.4407236874,"samples":4}]}-->
