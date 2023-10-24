## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,185,219|89|
|Function returning explicitly undefined|1,186,569|92|
|Function returning implicitly undefined|1,235,518|91|
|Function returning string|1,231,144|89|
|Function returning integer|1,176,152|89|
|Function returning float|1,212,205|91|
|Function returning functions|1,181,417|96|
|Function returning arrow functions|1,194,079|91|
|Function returning empty object|1,220,099|92|
|Function returning empty array|1,203,678|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1185219.4660492064,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1186569.4300861843,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1235518.2826906727,"samples":6},{"name":"Function returning string","opsSec":1231144.0152694238,"samples":6},{"name":"Function returning integer","opsSec":1176152.471330999,"samples":5},{"name":"Function returning float","opsSec":1212205.13077317,"samples":6},{"name":"Function returning functions","opsSec":1181417.1782881743,"samples":6},{"name":"Function returning arrow functions","opsSec":1194078.9744514867,"samples":6},{"name":"Function returning empty object","opsSec":1220099.4915525366,"samples":6},{"name":"Function returning empty array","opsSec":1203678.4082786553,"samples":4}]}-->
