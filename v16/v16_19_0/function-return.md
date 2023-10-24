## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,148,911|88|
|Function returning explicitly undefined|1,181,909|87|
|Function returning implicitly undefined|1,182,936|91|
|Function returning string|1,208,545|90|
|Function returning integer|1,212,801|92|
|Function returning float|1,200,552|90|
|Function returning functions|1,172,115|90|
|Function returning arrow functions|1,199,540|92|
|Function returning empty object|1,182,136|92|
|Function returning empty array|1,181,600|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1148911.0226582747,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1181909.0552102444,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1182936.4193758036,"samples":6},{"name":"Function returning string","opsSec":1208545.2504933502,"samples":5},{"name":"Function returning integer","opsSec":1212800.919304612,"samples":8},{"name":"Function returning float","opsSec":1200552.2400292968,"samples":9},{"name":"Function returning functions","opsSec":1172115.003845223,"samples":5},{"name":"Function returning arrow functions","opsSec":1199540.310200105,"samples":6},{"name":"Function returning empty object","opsSec":1182135.8962687105,"samples":6},{"name":"Function returning empty array","opsSec":1181599.61333502,"samples":5}]}-->
