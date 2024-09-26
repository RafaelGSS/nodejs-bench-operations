## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,716,712|858700|
|Function returning explicitly undefined|1,699,708|850290|
|Function returning implicitly undefined|1,671,912|836235|
|Function returning string|1,654,185|827398|
|Function returning integer|1,658,556|829461|
|Function returning float|1,641,119|820885|
|Function returning functions|1,602,124|801190|
|Function returning arrow functions|1,696,167|848187|
|Function returning empty object|1,654,431|827217|
|Function returning empty array|1,662,200|831403|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:16:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1716712.1546407272,"samples":858700},{"name":"Function returning explicitly undefined","opsSec":1699708.2774145955,"samples":850290},{"name":"Function returning implicitly undefined","opsSec":1671912.7381090862,"samples":836235},{"name":"Function returning string","opsSec":1654185.3144823408,"samples":827398},{"name":"Function returning integer","opsSec":1658556.5470162043,"samples":829461},{"name":"Function returning float","opsSec":1641119.7194401294,"samples":820885},{"name":"Function returning functions","opsSec":1602124.4387222817,"samples":801190},{"name":"Function returning arrow functions","opsSec":1696167.7222586253,"samples":848187},{"name":"Function returning empty object","opsSec":1654431.7135753718,"samples":827217},{"name":"Function returning empty array","opsSec":1662200.9355886325,"samples":831403}]}-->
