## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,161,283|86|
|Function returning explicitly undefined|1,167,277|88|
|Function returning implicitly undefined|1,223,432|91|
|Function returning string|1,187,572|90|
|Function returning integer|1,168,870|88|
|Function returning float|1,208,098|89|
|Function returning functions|1,155,691|90|
|Function returning arrow functions|1,185,744|87|
|Function returning empty object|1,207,680|91|
|Function returning empty array|1,188,512|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1161283.221129664,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1167277.339763347,"samples":9},{"name":"Function returning implicitly undefined","opsSec":1223432.4375684587,"samples":8},{"name":"Function returning string","opsSec":1187572.4957052304,"samples":5},{"name":"Function returning integer","opsSec":1168869.672341759,"samples":7},{"name":"Function returning float","opsSec":1208097.7275906047,"samples":5},{"name":"Function returning functions","opsSec":1155690.9711825503,"samples":5},{"name":"Function returning arrow functions","opsSec":1185744.1866156133,"samples":5},{"name":"Function returning empty object","opsSec":1207680.0711909356,"samples":5},{"name":"Function returning empty array","opsSec":1188512.0644031153,"samples":4}]}-->
