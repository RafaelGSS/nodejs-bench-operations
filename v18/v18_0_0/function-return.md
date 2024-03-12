## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,825,667|98|
|Function returning explicitly undefined|1,817,734|94|
|Function returning implicitly undefined|1,872,390|97|
|Function returning string|1,841,194|97|
|Function returning integer|1,852,997|97|
|Function returning float|1,845,332|95|
|Function returning functions|1,803,872|96|
|Function returning arrow functions|1,830,838|95|
|Function returning empty object|1,849,350|98|
|Function returning empty array|1,801,807|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1825666.537380393,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1817733.8847298669,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1872389.5878778733,"samples":5},{"name":"Function returning string","opsSec":1841193.517479964,"samples":6},{"name":"Function returning integer","opsSec":1852996.5290338092,"samples":6},{"name":"Function returning float","opsSec":1845332.006537664,"samples":6},{"name":"Function returning functions","opsSec":1803872.3709411472,"samples":6},{"name":"Function returning arrow functions","opsSec":1830838.2911739352,"samples":7},{"name":"Function returning empty object","opsSec":1849350.2608745433,"samples":5},{"name":"Function returning empty array","opsSec":1801807.419692909,"samples":5}]}-->
