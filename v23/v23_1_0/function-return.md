## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,903,323|951810|
|Function returning explicitly undefined|1,844,622|922429|
|Function returning implicitly undefined|1,902,010|951113|
|Function returning string|1,853,041|926522|
|Function returning integer|1,806,822|903436|
|Function returning float|1,880,574|940288|
|Function returning functions|1,827,934|913968|
|Function returning arrow functions|1,945,682|972842|
|Function returning empty object|1,983,249|991626|
|Function returning empty array|1,905,263|953770|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:52:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1903323.1995869027,"samples":951810},{"name":"Function returning explicitly undefined","opsSec":1844622.6372192265,"samples":922429},{"name":"Function returning implicitly undefined","opsSec":1902010.7874793967,"samples":951113},{"name":"Function returning string","opsSec":1853041.9764781618,"samples":926522},{"name":"Function returning integer","opsSec":1806822.2654103222,"samples":903436},{"name":"Function returning float","opsSec":1880574.8678939294,"samples":940288},{"name":"Function returning functions","opsSec":1827934.88495972,"samples":913968},{"name":"Function returning arrow functions","opsSec":1945682.641913516,"samples":972842},{"name":"Function returning empty object","opsSec":1983249.8104922092,"samples":991626},{"name":"Function returning empty array","opsSec":1905263.8422560997,"samples":953770}]}-->
