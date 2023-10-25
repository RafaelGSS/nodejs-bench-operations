## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,122,746|93|
|Function returning explicitly undefined|1,134,367|89|
|Function returning implicitly undefined|1,159,891|91|
|Function returning string|1,143,275|91|
|Function returning integer|1,164,777|91|
|Function returning float|1,147,766|94|
|Function returning functions|1,126,184|90|
|Function returning arrow functions|1,105,314|95|
|Function returning empty object|1,148,032|93|
|Function returning empty array|1,102,527|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1122746.0033204406,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1134366.6594932408,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1159890.925586543,"samples":5},{"name":"Function returning string","opsSec":1143274.6696105334,"samples":4},{"name":"Function returning integer","opsSec":1164777.3245441678,"samples":5},{"name":"Function returning float","opsSec":1147765.5532493612,"samples":6},{"name":"Function returning functions","opsSec":1126183.961648143,"samples":5},{"name":"Function returning arrow functions","opsSec":1105313.5086150635,"samples":6},{"name":"Function returning empty object","opsSec":1148031.5761270786,"samples":7},{"name":"Function returning empty array","opsSec":1102527.2707424618,"samples":5}]}-->
