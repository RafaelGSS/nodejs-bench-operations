## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,400,871|94|
|Function returning explicitly undefined|1,417,125|96|
|Function returning implicitly undefined|1,428,487|96|
|Function returning string|1,418,552|97|
|Function returning integer|1,434,783|95|
|Function returning float|1,433,082|98|
|Function returning functions|1,385,395|99|
|Function returning arrow functions|1,421,539|97|
|Function returning empty object|1,424,146|95|
|Function returning empty array|1,418,849|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1400870.7142809727,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1417124.8979191103,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1428486.8891175499,"samples":6},{"name":"Function returning string","opsSec":1418551.715636503,"samples":6},{"name":"Function returning integer","opsSec":1434782.6647587044,"samples":6},{"name":"Function returning float","opsSec":1433081.5188586726,"samples":6},{"name":"Function returning functions","opsSec":1385394.7334995798,"samples":5},{"name":"Function returning arrow functions","opsSec":1421538.8096074264,"samples":6},{"name":"Function returning empty object","opsSec":1424145.8959122803,"samples":8},{"name":"Function returning empty array","opsSec":1418849.3815638477,"samples":6}]}-->
