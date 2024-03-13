## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,727,970|94|
|Function returning explicitly undefined|1,724,253|94|
|Function returning implicitly undefined|1,796,492|96|
|Function returning string|1,748,725|95|
|Function returning integer|1,788,767|96|
|Function returning float|1,762,810|96|
|Function returning functions|1,700,840|96|
|Function returning arrow functions|1,730,062|93|
|Function returning empty object|1,779,976|95|
|Function returning empty array|1,762,901|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:54:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1727970.4978148441,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1724253.3378660523,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1796491.621021522,"samples":6},{"name":"Function returning string","opsSec":1748725.0220642488,"samples":5},{"name":"Function returning integer","opsSec":1788767.0052299532,"samples":6},{"name":"Function returning float","opsSec":1762809.6603888636,"samples":7},{"name":"Function returning functions","opsSec":1700839.8471186054,"samples":5},{"name":"Function returning arrow functions","opsSec":1730061.6463511707,"samples":4},{"name":"Function returning empty object","opsSec":1779976.4175164849,"samples":6},{"name":"Function returning empty array","opsSec":1762901.16886407,"samples":7}]}-->
