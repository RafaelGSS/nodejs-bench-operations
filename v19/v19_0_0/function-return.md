## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,019,284|87|
|Function returning explicitly undefined|1,126,693|90|
|Function returning implicitly undefined|1,131,504|95|
|Function returning string|1,012,690|83|
|Function returning integer|1,141,249|89|
|Function returning float|1,157,245|96|
|Function returning functions|1,126,974|94|
|Function returning arrow functions|1,133,846|90|
|Function returning empty object|1,152,124|98|
|Function returning empty array|982,795|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1019283.8085828833,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1126692.5898636957,"samples":4},{"name":"Function returning implicitly undefined","opsSec":1131503.911978343,"samples":6},{"name":"Function returning string","opsSec":1012690.0378836106,"samples":9},{"name":"Function returning integer","opsSec":1141248.656072314,"samples":5},{"name":"Function returning float","opsSec":1157245.375186282,"samples":6},{"name":"Function returning functions","opsSec":1126973.756095972,"samples":7},{"name":"Function returning arrow functions","opsSec":1133846.0352351535,"samples":6},{"name":"Function returning empty object","opsSec":1152124.4989265518,"samples":5},{"name":"Function returning empty array","opsSec":982795.1562003257,"samples":5}]}-->
