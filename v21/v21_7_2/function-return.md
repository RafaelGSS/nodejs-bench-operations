## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,947,854|974113|
|Function returning explicitly undefined|1,868,437|935006|
|Function returning implicitly undefined|1,925,913|962957|
|Function returning string|1,886,693|943458|
|Function returning integer|1,960,481|980339|
|Function returning float|1,927,699|964359|
|Function returning functions|1,860,171|930108|
|Function returning arrow functions|1,980,377|990189|
|Function returning empty object|1,933,612|967371|
|Function returning empty array|1,940,634|971184|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:51:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1947854.9141603035,"samples":974113},{"name":"Function returning explicitly undefined","opsSec":1868437.0757045178,"samples":935006},{"name":"Function returning implicitly undefined","opsSec":1925913.125635441,"samples":962957},{"name":"Function returning string","opsSec":1886693.12116821,"samples":943458},{"name":"Function returning integer","opsSec":1960481.4264483328,"samples":980339},{"name":"Function returning float","opsSec":1927699.0683926232,"samples":964359},{"name":"Function returning functions","opsSec":1860171.5121381157,"samples":930108},{"name":"Function returning arrow functions","opsSec":1980377.0850657867,"samples":990189},{"name":"Function returning empty object","opsSec":1933612.0589883132,"samples":967371},{"name":"Function returning empty array","opsSec":1940634.0861379856,"samples":971184}]}-->
