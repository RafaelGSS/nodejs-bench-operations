## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,277,686|92|
|Function returning explicitly undefined|1,231,898|92|
|Function returning implicitly undefined|1,246,518|90|
|Function returning string|1,275,684|91|
|Function returning integer|1,316,538|93|
|Function returning float|1,297,040|91|
|Function returning functions|1,246,731|93|
|Function returning arrow functions|1,276,580|96|
|Function returning empty object|1,300,724|95|
|Function returning empty array|1,291,177|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1277685.8581701294,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1231897.5030168307,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1246518.0172205986,"samples":6},{"name":"Function returning string","opsSec":1275683.5674011803,"samples":7},{"name":"Function returning integer","opsSec":1316538.3187882076,"samples":6},{"name":"Function returning float","opsSec":1297040.1746325372,"samples":7},{"name":"Function returning functions","opsSec":1246731.2513834944,"samples":9},{"name":"Function returning arrow functions","opsSec":1276579.7304058475,"samples":7},{"name":"Function returning empty object","opsSec":1300723.5607051414,"samples":5},{"name":"Function returning empty array","opsSec":1291177.16382715,"samples":8}]}-->
