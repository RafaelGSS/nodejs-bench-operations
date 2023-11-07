## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,758,845|94|
|Function returning explicitly undefined|1,752,954|99|
|Function returning implicitly undefined|1,792,447|96|
|Function returning string|1,724,821|95|
|Function returning integer|1,786,419|98|
|Function returning float|1,768,179|94|
|Function returning functions|1,710,527|100|
|Function returning arrow functions|1,742,528|101|
|Function returning empty object|1,771,580|99|
|Function returning empty array|1,779,848|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:20:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1758844.5349963126,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1752953.5578004783,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1792446.8612817717,"samples":8},{"name":"Function returning string","opsSec":1724820.9649384138,"samples":6},{"name":"Function returning integer","opsSec":1786418.9633959949,"samples":7},{"name":"Function returning float","opsSec":1768179.032835231,"samples":8},{"name":"Function returning functions","opsSec":1710527.3719574655,"samples":7},{"name":"Function returning arrow functions","opsSec":1742528.1694649875,"samples":7},{"name":"Function returning empty object","opsSec":1771579.8433079217,"samples":6},{"name":"Function returning empty array","opsSec":1779848.3906572664,"samples":7}]}-->
