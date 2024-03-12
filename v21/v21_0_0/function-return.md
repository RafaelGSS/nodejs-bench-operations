## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,903,949|97|
|Function returning explicitly undefined|1,886,634|95|
|Function returning implicitly undefined|1,905,564|90|
|Function returning string|1,861,707|90|
|Function returning integer|1,908,728|97|
|Function returning float|1,916,062|96|
|Function returning functions|1,845,524|93|
|Function returning arrow functions|1,857,974|95|
|Function returning empty object|1,875,594|96|
|Function returning empty array|1,908,096|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:48:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1903949.396886907,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1886633.6227991562,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1905563.7044934437,"samples":5},{"name":"Function returning string","opsSec":1861706.5838029354,"samples":4},{"name":"Function returning integer","opsSec":1908728.2466160324,"samples":6},{"name":"Function returning float","opsSec":1916062.2229818252,"samples":4},{"name":"Function returning functions","opsSec":1845524.4133406545,"samples":6},{"name":"Function returning arrow functions","opsSec":1857973.9920842866,"samples":5},{"name":"Function returning empty object","opsSec":1875594.279444251,"samples":5},{"name":"Function returning empty array","opsSec":1908096.3098239903,"samples":6}]}-->
