## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,001,275|92|
|Function returning explicitly undefined|1,018,067|92|
|Function returning implicitly undefined|1,039,456|84|
|Function returning string|1,041,434|97|
|Function returning integer|1,048,967|94|
|Function returning float|1,057,961|92|
|Function returning functions|1,030,447|90|
|Function returning arrow functions|1,039,952|93|
|Function returning empty object|1,054,509|95|
|Function returning empty array|1,047,643|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1001275.1910208459,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1018067.1322278648,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1039455.9780310849,"samples":6},{"name":"Function returning string","opsSec":1041433.6831286289,"samples":6},{"name":"Function returning integer","opsSec":1048967.0901457386,"samples":6},{"name":"Function returning float","opsSec":1057960.97518787,"samples":6},{"name":"Function returning functions","opsSec":1030447.1654165763,"samples":6},{"name":"Function returning arrow functions","opsSec":1039952.0799739569,"samples":7},{"name":"Function returning empty object","opsSec":1054508.854473309,"samples":6},{"name":"Function returning empty array","opsSec":1047643.3747266913,"samples":6}]}-->
