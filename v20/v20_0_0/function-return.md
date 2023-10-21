## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,146,205|90|
|Function returning explicitly undefined|1,141,134|96|
|Function returning implicitly undefined|1,157,457|91|
|Function returning string|1,143,783|96|
|Function returning integer|1,167,805|94|
|Function returning float|1,153,147|95|
|Function returning functions|1,130,644|95|
|Function returning arrow functions|1,129,671|96|
|Function returning empty object|1,156,223|93|
|Function returning empty array|1,174,723|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1146205.0231708447,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1141133.769956881,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1157457.3145061822,"samples":5},{"name":"Function returning string","opsSec":1143783.2125700763,"samples":6},{"name":"Function returning integer","opsSec":1167805.253584906,"samples":6},{"name":"Function returning float","opsSec":1153146.8331424703,"samples":5},{"name":"Function returning functions","opsSec":1130643.9839868143,"samples":5},{"name":"Function returning arrow functions","opsSec":1129670.5453115313,"samples":6},{"name":"Function returning empty object","opsSec":1156222.5199732946,"samples":6},{"name":"Function returning empty array","opsSec":1174723.371126073,"samples":6}]}-->
