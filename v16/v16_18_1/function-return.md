## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,701,716|97|
|Function returning explicitly undefined|1,681,429|93|
|Function returning implicitly undefined|1,705,501|95|
|Function returning string|1,715,099|101|
|Function returning integer|1,747,279|100|
|Function returning float|1,729,852|96|
|Function returning functions|1,675,227|96|
|Function returning arrow functions|1,691,660|100|
|Function returning empty object|1,712,298|95|
|Function returning empty array|1,705,254|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:55:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1701715.9944136036,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1681429.3146576805,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1705500.5223481157,"samples":6},{"name":"Function returning string","opsSec":1715098.9518841116,"samples":10},{"name":"Function returning integer","opsSec":1747278.9142801573,"samples":8},{"name":"Function returning float","opsSec":1729851.5031334425,"samples":5},{"name":"Function returning functions","opsSec":1675226.6553434525,"samples":7},{"name":"Function returning arrow functions","opsSec":1691659.6139957625,"samples":6},{"name":"Function returning empty object","opsSec":1712298.3665695998,"samples":5},{"name":"Function returning empty array","opsSec":1705254.1518324756,"samples":8}]}-->
