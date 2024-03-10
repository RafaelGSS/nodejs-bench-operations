## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,852,340|94|
|Function returning explicitly undefined|1,842,631|96|
|Function returning implicitly undefined|1,877,072|95|
|Function returning string|1,855,828|98|
|Function returning integer|1,869,638|94|
|Function returning float|1,894,458|95|
|Function returning functions|1,837,415|97|
|Function returning arrow functions|1,825,935|99|
|Function returning empty object|1,878,370|96|
|Function returning empty array|1,792,221|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1852340.0518463398,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1842631.0720755733,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1877071.7504063745,"samples":5},{"name":"Function returning string","opsSec":1855828.053525665,"samples":4},{"name":"Function returning integer","opsSec":1869637.9985880319,"samples":7},{"name":"Function returning float","opsSec":1894457.9347780626,"samples":5},{"name":"Function returning functions","opsSec":1837414.5396582333,"samples":5},{"name":"Function returning arrow functions","opsSec":1825934.615032212,"samples":5},{"name":"Function returning empty object","opsSec":1878369.7435473052,"samples":5},{"name":"Function returning empty array","opsSec":1792221.3508624653,"samples":5}]}-->
