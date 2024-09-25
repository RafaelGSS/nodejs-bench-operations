## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,603,111|801556|
|Function returning explicitly undefined|1,585,431|792716|
|Function returning implicitly undefined|1,679,293|839647|
|Function returning string|1,574,210|787106|
|Function returning integer|1,675,927|837964|
|Function returning float|1,599,202|799602|
|Function returning functions|1,554,646|777324|
|Function returning arrow functions|1,632,737|816369|
|Function returning empty object|1,675,108|837555|
|Function returning empty array|1,567,855|783928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:14:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1603111.6753709596,"samples":801556},{"name":"Function returning explicitly undefined","opsSec":1585431.836867973,"samples":792716},{"name":"Function returning implicitly undefined","opsSec":1679293.6793122867,"samples":839647},{"name":"Function returning string","opsSec":1574210.7510574951,"samples":787106},{"name":"Function returning integer","opsSec":1675927.263563468,"samples":837964},{"name":"Function returning float","opsSec":1599202.3198053024,"samples":799602},{"name":"Function returning functions","opsSec":1554646.7354874103,"samples":777324},{"name":"Function returning arrow functions","opsSec":1632737.0469700212,"samples":816369},{"name":"Function returning empty object","opsSec":1675108.9035445356,"samples":837555},{"name":"Function returning empty array","opsSec":1567855.9504794676,"samples":783928}]}-->
