## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,349,728|93|
|Function returning explicitly undefined|1,344,114|95|
|Function returning implicitly undefined|1,369,933|93|
|Function returning string|1,360,070|95|
|Function returning integer|1,363,682|94|
|Function returning float|1,368,686|96|
|Function returning functions|1,322,963|96|
|Function returning arrow functions|1,326,155|95|
|Function returning empty object|1,353,752|97|
|Function returning empty array|1,350,494|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1349728.089963084,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1344114.3566508286,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1369933.2048434087,"samples":6},{"name":"Function returning string","opsSec":1360070.0339710398,"samples":5},{"name":"Function returning integer","opsSec":1363681.9435561732,"samples":6},{"name":"Function returning float","opsSec":1368685.6659016781,"samples":6},{"name":"Function returning functions","opsSec":1322963.2222790562,"samples":5},{"name":"Function returning arrow functions","opsSec":1326154.8578961862,"samples":6},{"name":"Function returning empty object","opsSec":1353752.3106438396,"samples":5},{"name":"Function returning empty array","opsSec":1350494.4864527485,"samples":5}]}-->
