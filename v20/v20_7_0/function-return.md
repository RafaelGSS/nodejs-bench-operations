## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,245,285|83|
|Function returning explicitly undefined|1,313,577|85|
|Function returning implicitly undefined|1,357,628|86|
|Function returning string|1,295,583|88|
|Function returning integer|1,294,955|84|
|Function returning float|1,309,118|84|
|Function returning functions|1,234,784|85|
|Function returning arrow functions|1,184,480|79|
|Function returning empty object|1,303,036|89|
|Function returning empty array|1,195,027|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1245284.5675843263,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1313576.53253087,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1357627.7273810764,"samples":3},{"name":"Function returning string","opsSec":1295583.094467572,"samples":6},{"name":"Function returning integer","opsSec":1294954.9124638506,"samples":5},{"name":"Function returning float","opsSec":1309118.3250553096,"samples":5},{"name":"Function returning functions","opsSec":1234784.458605391,"samples":7},{"name":"Function returning arrow functions","opsSec":1184480.019599985,"samples":7},{"name":"Function returning empty object","opsSec":1303036.2734641526,"samples":4},{"name":"Function returning empty array","opsSec":1195027.1778084415,"samples":4}]}-->
