## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,676,001|96|
|Function returning explicitly undefined|1,722,205|97|
|Function returning implicitly undefined|1,739,007|97|
|Function returning string|1,737,901|95|
|Function returning integer|1,760,844|95|
|Function returning float|1,683,783|96|
|Function returning functions|1,691,274|97|
|Function returning arrow functions|1,731,315|98|
|Function returning empty object|1,760,455|94|
|Function returning empty array|1,753,844|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:57:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1676000.9055937154,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1722205.1437102216,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1739007.121220127,"samples":5},{"name":"Function returning string","opsSec":1737901.4278521151,"samples":6},{"name":"Function returning integer","opsSec":1760844.2040569524,"samples":9},{"name":"Function returning float","opsSec":1683782.7093010256,"samples":7},{"name":"Function returning functions","opsSec":1691274.1662719145,"samples":7},{"name":"Function returning arrow functions","opsSec":1731315.4739865796,"samples":7},{"name":"Function returning empty object","opsSec":1760455.0759310338,"samples":9},{"name":"Function returning empty array","opsSec":1753843.9362748198,"samples":6}]}-->
