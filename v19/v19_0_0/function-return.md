## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,155,877|92|
|Function returning explicitly undefined|1,169,191|94|
|Function returning implicitly undefined|1,198,603|93|
|Function returning string|1,171,109|96|
|Function returning integer|1,196,331|97|
|Function returning float|1,179,349|97|
|Function returning functions|1,156,688|98|
|Function returning arrow functions|1,165,816|95|
|Function returning empty object|1,189,408|98|
|Function returning empty array|1,184,662|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1155877.3951134079,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1169191.022769571,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1198603.4884694193,"samples":7},{"name":"Function returning string","opsSec":1171108.5496732488,"samples":8},{"name":"Function returning integer","opsSec":1196331.2589629472,"samples":6},{"name":"Function returning float","opsSec":1179349.0902593394,"samples":5},{"name":"Function returning functions","opsSec":1156687.515312917,"samples":6},{"name":"Function returning arrow functions","opsSec":1165815.5509809393,"samples":6},{"name":"Function returning empty object","opsSec":1189407.7174763824,"samples":6},{"name":"Function returning empty array","opsSec":1184661.8930195,"samples":5}]}-->
