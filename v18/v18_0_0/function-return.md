## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,328,410|96|
|Function returning explicitly undefined|1,326,457|93|
|Function returning implicitly undefined|1,261,658|91|
|Function returning string|1,343,957|98|
|Function returning integer|1,350,337|95|
|Function returning float|1,358,559|97|
|Function returning functions|1,316,394|96|
|Function returning arrow functions|1,330,346|95|
|Function returning empty object|1,322,303|94|
|Function returning empty array|1,353,442|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1328410.4677625643,"samples":9},{"name":"Function returning explicitly undefined","opsSec":1326456.5954911637,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1261657.6245298022,"samples":6},{"name":"Function returning string","opsSec":1343956.7329552846,"samples":5},{"name":"Function returning integer","opsSec":1350336.6061600004,"samples":7},{"name":"Function returning float","opsSec":1358559.0707666345,"samples":7},{"name":"Function returning functions","opsSec":1316393.5538300371,"samples":6},{"name":"Function returning arrow functions","opsSec":1330345.7375685633,"samples":6},{"name":"Function returning empty object","opsSec":1322302.671029584,"samples":8},{"name":"Function returning empty array","opsSec":1353442.1526621168,"samples":8}]}-->
