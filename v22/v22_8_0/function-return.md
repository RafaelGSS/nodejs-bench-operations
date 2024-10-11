## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,154,933|578465|
|Function returning explicitly undefined|1,077,314|539630|
|Function returning implicitly undefined|1,025,849|513982|
|Function returning string|959,422|479775|
|Function returning integer|1,206,948|603475|
|Function returning float|1,280,289|640145|
|Function returning functions|1,322,974|661559|
|Function returning arrow functions|1,296,923|648462|
|Function returning empty object|1,440,636|720319|
|Function returning empty array|1,429,292|714676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:02:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Function returning null","opsSec":1154933.113716785,"samples":578465},{"name":"Function returning explicitly undefined","opsSec":1077314.5337039398,"samples":539630},{"name":"Function returning implicitly undefined","opsSec":1025849.8957077289,"samples":513982},{"name":"Function returning string","opsSec":959422.1090328661,"samples":479775},{"name":"Function returning integer","opsSec":1206948.5275227965,"samples":603475},{"name":"Function returning float","opsSec":1280289.2932803102,"samples":640145},{"name":"Function returning functions","opsSec":1322974.6239481042,"samples":661559},{"name":"Function returning arrow functions","opsSec":1296923.1129045908,"samples":648462},{"name":"Function returning empty object","opsSec":1440636.9656226588,"samples":720319},{"name":"Function returning empty array","opsSec":1429292.275592972,"samples":714676}]}-->
