## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,655,530|827766|
|Function returning explicitly undefined|1,634,714|817358|
|Function returning implicitly undefined|1,664,746|832378|
|Function returning string|1,612,879|806440|
|Function returning integer|1,665,229|832615|
|Function returning float|1,635,634|817818|
|Function returning functions|1,601,949|800975|
|Function returning arrow functions|1,604,881|802441|
|Function returning empty object|1,634,527|817264|
|Function returning empty array|1,620,381|810191|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:56:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1655530.2252719938,"samples":827766},{"name":"Function returning explicitly undefined","opsSec":1634714.0154569459,"samples":817358},{"name":"Function returning implicitly undefined","opsSec":1664746.1613502896,"samples":832378},{"name":"Function returning string","opsSec":1612879.7258104887,"samples":806440},{"name":"Function returning integer","opsSec":1665229.7701968327,"samples":832615},{"name":"Function returning float","opsSec":1635634.7732741414,"samples":817818},{"name":"Function returning functions","opsSec":1601949.333589446,"samples":800975},{"name":"Function returning arrow functions","opsSec":1604881.0370714809,"samples":802441},{"name":"Function returning empty object","opsSec":1634527.2775418442,"samples":817264},{"name":"Function returning empty array","opsSec":1620381.4879603374,"samples":810191}]}-->
