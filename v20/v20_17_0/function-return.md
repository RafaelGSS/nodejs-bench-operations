## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,781,267|890699|
|Function returning explicitly undefined|1,819,541|910136|
|Function returning implicitly undefined|1,596,113|798057|
|Function returning string|1,596,069|798183|
|Function returning integer|1,619,177|809589|
|Function returning float|1,605,276|802639|
|Function returning functions|1,715,332|857930|
|Function returning arrow functions|1,863,065|931784|
|Function returning empty object|1,905,747|952880|
|Function returning empty array|1,890,428|945511|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:49:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1781267.4366594278,"samples":890699},{"name":"Function returning explicitly undefined","opsSec":1819541.337702267,"samples":910136},{"name":"Function returning implicitly undefined","opsSec":1596113.4732825537,"samples":798057},{"name":"Function returning string","opsSec":1596069.5013608714,"samples":798183},{"name":"Function returning integer","opsSec":1619177.8542739933,"samples":809589},{"name":"Function returning float","opsSec":1605276.0993530983,"samples":802639},{"name":"Function returning functions","opsSec":1715332.9125026464,"samples":857930},{"name":"Function returning arrow functions","opsSec":1863065.78080973,"samples":931784},{"name":"Function returning empty object","opsSec":1905747.9213696744,"samples":952880},{"name":"Function returning empty array","opsSec":1890428.9724313484,"samples":945511}]}-->
