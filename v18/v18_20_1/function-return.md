## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,836,597|95|
|Function returning explicitly undefined|1,847,448|95|
|Function returning implicitly undefined|1,868,648|95|
|Function returning string|1,857,911|98|
|Function returning integer|1,912,268|99|
|Function returning float|1,868,708|95|
|Function returning functions|1,816,450|94|
|Function returning arrow functions|1,852,249|96|
|Function returning empty object|1,856,495|99|
|Function returning empty array|1,854,095|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:08:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1836597.099405213,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1847448.0062377423,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1868648.0414301606,"samples":5},{"name":"Function returning string","opsSec":1857910.8857439812,"samples":7},{"name":"Function returning integer","opsSec":1912268.121487502,"samples":5},{"name":"Function returning float","opsSec":1868707.827950955,"samples":5},{"name":"Function returning functions","opsSec":1816450.1396833758,"samples":6},{"name":"Function returning arrow functions","opsSec":1852248.9739298292,"samples":8},{"name":"Function returning empty object","opsSec":1856494.971012339,"samples":6},{"name":"Function returning empty array","opsSec":1854095.1672356017,"samples":5}]}-->
