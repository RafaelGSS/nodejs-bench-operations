## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,852,298|96|
|Function returning explicitly undefined|1,850,604|94|
|Function returning implicitly undefined|1,721,350|93|
|Function returning string|1,868,095|96|
|Function returning integer|1,801,003|98|
|Function returning float|1,888,090|96|
|Function returning functions|1,835,911|97|
|Function returning arrow functions|1,865,416|96|
|Function returning empty object|1,876,646|98|
|Function returning empty array|1,882,333|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:01:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1852297.9910739986,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1850604.2662128904,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1721350.4932417416,"samples":5},{"name":"Function returning string","opsSec":1868095.077025868,"samples":8},{"name":"Function returning integer","opsSec":1801003.1507761544,"samples":6},{"name":"Function returning float","opsSec":1888090.2426518768,"samples":5},{"name":"Function returning functions","opsSec":1835911.34403424,"samples":5},{"name":"Function returning arrow functions","opsSec":1865415.5208857283,"samples":8},{"name":"Function returning empty object","opsSec":1876646.3095002563,"samples":7},{"name":"Function returning empty array","opsSec":1882332.870699789,"samples":5}]}-->
