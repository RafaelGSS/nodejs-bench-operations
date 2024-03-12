## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,687,737|96|
|Function returning explicitly undefined|1,675,900|94|
|Function returning implicitly undefined|1,691,335|93|
|Function returning string|1,699,200|97|
|Function returning integer|1,697,576|98|
|Function returning float|1,695,843|98|
|Function returning functions|1,651,556|96|
|Function returning arrow functions|1,680,624|94|
|Function returning empty object|1,685,693|97|
|Function returning empty array|1,690,562|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1687737.4497575006,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1675900.4484186454,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1691334.9984938342,"samples":6},{"name":"Function returning string","opsSec":1699199.6838979109,"samples":6},{"name":"Function returning integer","opsSec":1697576.4907261806,"samples":6},{"name":"Function returning float","opsSec":1695842.722954453,"samples":4},{"name":"Function returning functions","opsSec":1651556.059745417,"samples":7},{"name":"Function returning arrow functions","opsSec":1680623.634123653,"samples":5},{"name":"Function returning empty object","opsSec":1685692.9895572504,"samples":6},{"name":"Function returning empty array","opsSec":1690561.5279137024,"samples":6}]}-->
