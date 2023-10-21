## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,172,354|88|
|Function returning explicitly undefined|1,133,946|94|
|Function returning implicitly undefined|1,212,211|92|
|Function returning string|1,215,581|91|
|Function returning integer|1,219,698|94|
|Function returning float|1,217,919|92|
|Function returning functions|1,187,501|93|
|Function returning arrow functions|1,207,868|95|
|Function returning empty object|1,259,579|94|
|Function returning empty array|1,223,446|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1172353.8441996707,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1133945.992717131,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1212211.330182474,"samples":5},{"name":"Function returning string","opsSec":1215580.8370022492,"samples":5},{"name":"Function returning integer","opsSec":1219697.7692261643,"samples":6},{"name":"Function returning float","opsSec":1217918.8455409624,"samples":5},{"name":"Function returning functions","opsSec":1187500.6379409747,"samples":5},{"name":"Function returning arrow functions","opsSec":1207868.1868808132,"samples":5},{"name":"Function returning empty object","opsSec":1259579.0835362177,"samples":8},{"name":"Function returning empty array","opsSec":1223446.150650431,"samples":6}]}-->
