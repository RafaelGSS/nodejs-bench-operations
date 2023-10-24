## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,130,178|79|
|Function returning explicitly undefined|1,157,432|88|
|Function returning implicitly undefined|1,183,996|88|
|Function returning string|1,139,345|88|
|Function returning integer|1,134,434|87|
|Function returning float|1,134,929|87|
|Function returning functions|1,102,047|88|
|Function returning arrow functions|1,122,637|88|
|Function returning empty object|1,158,128|88|
|Function returning empty array|1,144,543|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1130178.4155062486,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1157431.6495431387,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1183996.019032365,"samples":5},{"name":"Function returning string","opsSec":1139345.4076265064,"samples":5},{"name":"Function returning integer","opsSec":1134434.2790416672,"samples":4},{"name":"Function returning float","opsSec":1134929.4468133354,"samples":4},{"name":"Function returning functions","opsSec":1102046.7436780832,"samples":7},{"name":"Function returning arrow functions","opsSec":1122637.3944588448,"samples":4},{"name":"Function returning empty object","opsSec":1158128.1099165124,"samples":6},{"name":"Function returning empty array","opsSec":1144543.2761451434,"samples":7}]}-->
