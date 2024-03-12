## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,800,414|93|
|Function returning explicitly undefined|1,830,422|95|
|Function returning implicitly undefined|1,873,150|96|
|Function returning string|1,856,825|96|
|Function returning integer|1,881,105|97|
|Function returning float|1,851,945|95|
|Function returning functions|1,814,127|96|
|Function returning arrow functions|1,839,085|98|
|Function returning empty object|1,833,976|97|
|Function returning empty array|1,864,063|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:48:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1800414.056947276,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1830422.3510921053,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1873150.2837409482,"samples":6},{"name":"Function returning string","opsSec":1856825.3067363875,"samples":8},{"name":"Function returning integer","opsSec":1881105.4427662387,"samples":5},{"name":"Function returning float","opsSec":1851945.0481330038,"samples":6},{"name":"Function returning functions","opsSec":1814126.6265287793,"samples":5},{"name":"Function returning arrow functions","opsSec":1839084.6308139157,"samples":5},{"name":"Function returning empty object","opsSec":1833976.151667884,"samples":5},{"name":"Function returning empty array","opsSec":1864062.8895762798,"samples":5}]}-->
