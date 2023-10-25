## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,522,448|92|
|Function returning explicitly undefined|1,495,758|97|
|Function returning implicitly undefined|1,540,755|97|
|Function returning string|1,502,391|95|
|Function returning integer|1,541,409|96|
|Function returning float|1,455,475|95|
|Function returning functions|1,484,846|97|
|Function returning arrow functions|1,514,837|97|
|Function returning empty object|1,540,467|93|
|Function returning empty array|1,532,296|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1522447.5434282506,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1495758.2973793268,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1540755.3681839504,"samples":7},{"name":"Function returning string","opsSec":1502390.6376579227,"samples":4},{"name":"Function returning integer","opsSec":1541408.6043599623,"samples":6},{"name":"Function returning float","opsSec":1455475.3371521435,"samples":8},{"name":"Function returning functions","opsSec":1484846.3162675851,"samples":8},{"name":"Function returning arrow functions","opsSec":1514837.0663411284,"samples":6},{"name":"Function returning empty object","opsSec":1540467.0003661253,"samples":6},{"name":"Function returning empty array","opsSec":1532296.4801934706,"samples":5}]}-->
