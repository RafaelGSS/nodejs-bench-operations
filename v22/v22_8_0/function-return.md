## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,668,057|834119|
|Function returning explicitly undefined|1,585,848|794420|
|Function returning implicitly undefined|1,624,108|812769|
|Function returning string|1,564,467|782235|
|Function returning integer|1,633,054|816586|
|Function returning float|1,625,360|812681|
|Function returning functions|1,629,460|814735|
|Function returning arrow functions|1,607,007|803504|
|Function returning empty object|1,635,541|817880|
|Function returning empty array|1,641,557|820792|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:51:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1668057.949824896,"samples":834119},{"name":"Function returning explicitly undefined","opsSec":1585848.8701836895,"samples":794420},{"name":"Function returning implicitly undefined","opsSec":1624108.5473584766,"samples":812769},{"name":"Function returning string","opsSec":1564467.7190060655,"samples":782235},{"name":"Function returning integer","opsSec":1633054.0902285774,"samples":816586},{"name":"Function returning float","opsSec":1625360.3486338858,"samples":812681},{"name":"Function returning functions","opsSec":1629460.72185065,"samples":814735},{"name":"Function returning arrow functions","opsSec":1607007.7621628512,"samples":803504},{"name":"Function returning empty object","opsSec":1635541.776202968,"samples":817880},{"name":"Function returning empty array","opsSec":1641557.991155188,"samples":820792}]}-->
