## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|842,426,193|99|
|Using dot notation|677,998,235|96|
|Using define property (writable)|4,481,058|97|
|Using define property initialized (writable)|6,268,095|98|
|Using define property (getter)|2,422,117|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:57:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":842426193.2269248,"samples":6},{"name":"Using dot notation","opsSec":677998234.5193894,"samples":6},{"name":"Using define property (writable)","opsSec":4481057.608689243,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6268095.364874159,"samples":5},{"name":"Using define property (getter)","opsSec":2422116.9479361726,"samples":4}]}-->
