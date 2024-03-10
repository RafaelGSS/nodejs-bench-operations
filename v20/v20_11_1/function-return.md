## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,768,562|89|
|Function returning explicitly undefined|1,752,386|93|
|Function returning implicitly undefined|1,834,240|90|
|Function returning string|1,783,905|94|
|Function returning integer|1,783,985|94|
|Function returning float|1,784,406|95|
|Function returning functions|1,723,110|93|
|Function returning arrow functions|1,714,498|96|
|Function returning empty object|1,783,757|96|
|Function returning empty array|1,786,444|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Function returning null","opsSec":1768561.9601690243,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1752386.0054016884,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1834239.812939981,"samples":5},{"name":"Function returning string","opsSec":1783905.2577719332,"samples":5},{"name":"Function returning integer","opsSec":1783985.4083977954,"samples":4},{"name":"Function returning float","opsSec":1784406.0211665584,"samples":7},{"name":"Function returning functions","opsSec":1723109.7918117482,"samples":4},{"name":"Function returning arrow functions","opsSec":1714497.8515188305,"samples":4},{"name":"Function returning empty object","opsSec":1783757.3822267463,"samples":6},{"name":"Function returning empty array","opsSec":1786443.9459324807,"samples":4}]}-->
