## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,737,785|92|
|Function returning explicitly undefined|1,739,845|95|
|Function returning implicitly undefined|1,773,427|100|
|Function returning string|1,731,301|100|
|Function returning integer|1,746,922|100|
|Function returning float|1,756,124|95|
|Function returning functions|1,692,525|97|
|Function returning arrow functions|1,719,252|96|
|Function returning empty object|1,702,420|100|
|Function returning empty array|1,767,204|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:54:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1737784.70984865,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1739844.9088641966,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1773426.9747028146,"samples":5},{"name":"Function returning string","opsSec":1731301.3404497504,"samples":6},{"name":"Function returning integer","opsSec":1746922.2851000645,"samples":7},{"name":"Function returning float","opsSec":1756124.1626262935,"samples":6},{"name":"Function returning functions","opsSec":1692525.0048577222,"samples":6},{"name":"Function returning arrow functions","opsSec":1719251.5739950123,"samples":6},{"name":"Function returning empty object","opsSec":1702420.2704935437,"samples":6},{"name":"Function returning empty array","opsSec":1767204.3521600734,"samples":6}]}-->
