## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,932,412|94|
|Function returning explicitly undefined|1,924,070|95|
|Function returning implicitly undefined|1,981,217|96|
|Function returning string|1,834,648|93|
|Function returning integer|1,965,117|97|
|Function returning float|1,947,204|96|
|Function returning functions|1,895,626|94|
|Function returning arrow functions|1,901,793|95|
|Function returning empty object|1,953,149|97|
|Function returning empty array|1,953,335|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:05:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1932412.1312895406,"samples":8},{"name":"Function returning explicitly undefined","opsSec":1924070.3549069932,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1981217.2577888928,"samples":6},{"name":"Function returning string","opsSec":1834647.8416559917,"samples":5},{"name":"Function returning integer","opsSec":1965117.3120946214,"samples":6},{"name":"Function returning float","opsSec":1947204.0516866052,"samples":5},{"name":"Function returning functions","opsSec":1895626.478698364,"samples":5},{"name":"Function returning arrow functions","opsSec":1901793.0712344758,"samples":5},{"name":"Function returning empty object","opsSec":1953149.4768564606,"samples":6},{"name":"Function returning empty array","opsSec":1953335.238470827,"samples":5}]}-->
