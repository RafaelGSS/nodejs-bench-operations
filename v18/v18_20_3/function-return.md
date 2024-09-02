## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,543,622|771812|
|Function returning explicitly undefined|1,560,784|780393|
|Function returning implicitly undefined|1,590,607|795304|
|Function returning string|1,559,957|779979|
|Function returning integer|1,590,098|795050|
|Function returning float|1,548,841|774421|
|Function returning functions|1,532,415|766208|
|Function returning arrow functions|1,558,321|779161|
|Function returning empty object|1,551,179|775590|
|Function returning empty array|1,570,562|785282|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:31:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1543622.771101593,"samples":771812},{"name":"Function returning explicitly undefined","opsSec":1560784.9678230558,"samples":780393},{"name":"Function returning implicitly undefined","opsSec":1590607.026438873,"samples":795304},{"name":"Function returning string","opsSec":1559957.7403077353,"samples":779979},{"name":"Function returning integer","opsSec":1590098.6850898117,"samples":795050},{"name":"Function returning float","opsSec":1548841.9441561596,"samples":774421},{"name":"Function returning functions","opsSec":1532415.476424412,"samples":766208},{"name":"Function returning arrow functions","opsSec":1558321.282581878,"samples":779161},{"name":"Function returning empty object","opsSec":1551179.827534938,"samples":775590},{"name":"Function returning empty array","opsSec":1570562.0160962984,"samples":785282}]}-->
