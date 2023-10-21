## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,349,601|93|
|Function returning explicitly undefined|1,346,431|93|
|Function returning implicitly undefined|1,386,813|95|
|Function returning string|1,355,847|97|
|Function returning integer|1,368,909|92|
|Function returning float|1,364,769|95|
|Function returning functions|1,338,356|92|
|Function returning arrow functions|1,350,102|95|
|Function returning empty object|1,374,483|98|
|Function returning empty array|1,379,515|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1349600.9619022987,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1346430.5248447158,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1386812.5778220121,"samples":6},{"name":"Function returning string","opsSec":1355846.5625164749,"samples":5},{"name":"Function returning integer","opsSec":1368908.5035739448,"samples":7},{"name":"Function returning float","opsSec":1364768.6088557388,"samples":5},{"name":"Function returning functions","opsSec":1338355.5213830688,"samples":7},{"name":"Function returning arrow functions","opsSec":1350101.6552818425,"samples":7},{"name":"Function returning empty object","opsSec":1374483.1672656364,"samples":5},{"name":"Function returning empty array","opsSec":1379514.575953374,"samples":5}]}-->
