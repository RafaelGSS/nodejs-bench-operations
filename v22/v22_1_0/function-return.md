## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,002,800|96|
|Function returning explicitly undefined|1,965,494|97|
|Function returning implicitly undefined|2,018,074|97|
|Function returning string|1,922,486|98|
|Function returning integer|2,050,556|97|
|Function returning float|2,003,071|97|
|Function returning functions|1,976,325|97|
|Function returning arrow functions|1,988,551|96|
|Function returning empty object|2,013,364|94|
|Function returning empty array|2,015,740|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:18:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2002800.1611261922,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1965494.30686029,"samples":6},{"name":"Function returning implicitly undefined","opsSec":2018074.1961018897,"samples":7},{"name":"Function returning string","opsSec":1922486.3930012016,"samples":4},{"name":"Function returning integer","opsSec":2050556.3634409893,"samples":5},{"name":"Function returning float","opsSec":2003071.444446296,"samples":6},{"name":"Function returning functions","opsSec":1976324.948121165,"samples":6},{"name":"Function returning arrow functions","opsSec":1988550.9140535225,"samples":4},{"name":"Function returning empty object","opsSec":2013363.7100518143,"samples":6},{"name":"Function returning empty array","opsSec":2015740.0617820965,"samples":6}]}-->
