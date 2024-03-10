## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,579,256|93|
|Function returning explicitly undefined|1,586,216|97|
|Function returning implicitly undefined|1,600,187|97|
|Function returning string|1,593,252|96|
|Function returning integer|1,609,154|95|
|Function returning float|1,582,968|96|
|Function returning functions|1,564,922|93|
|Function returning arrow functions|1,571,590|97|
|Function returning empty object|1,586,111|96|
|Function returning empty array|1,571,789|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1579255.7293208863,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1586216.073736734,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1600186.7077897645,"samples":9},{"name":"Function returning string","opsSec":1593251.5634356327,"samples":6},{"name":"Function returning integer","opsSec":1609153.7434571323,"samples":7},{"name":"Function returning float","opsSec":1582967.5727950316,"samples":8},{"name":"Function returning functions","opsSec":1564922.3099382112,"samples":6},{"name":"Function returning arrow functions","opsSec":1571590.4728822068,"samples":7},{"name":"Function returning empty object","opsSec":1586110.838049232,"samples":6},{"name":"Function returning empty array","opsSec":1571789.3802609995,"samples":8}]}-->
