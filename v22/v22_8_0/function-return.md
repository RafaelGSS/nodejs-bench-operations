## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,668,351|834292|
|Function returning explicitly undefined|1,590,370|796167|
|Function returning implicitly undefined|1,609,247|804680|
|Function returning string|1,597,391|798777|
|Function returning integer|1,633,205|816642|
|Function returning float|1,626,770|813564|
|Function returning functions|1,625,822|812985|
|Function returning arrow functions|1,609,734|804978|
|Function returning empty object|1,640,031|820092|
|Function returning empty array|1,643,517|821760|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:22:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1668351.6786920386,"samples":834292},{"name":"Function returning explicitly undefined","opsSec":1590370.785867835,"samples":796167},{"name":"Function returning implicitly undefined","opsSec":1609247.227172814,"samples":804680},{"name":"Function returning string","opsSec":1597391.8998647856,"samples":798777},{"name":"Function returning integer","opsSec":1633205.6061309057,"samples":816642},{"name":"Function returning float","opsSec":1626770.338273427,"samples":813564},{"name":"Function returning functions","opsSec":1625822.6581957783,"samples":812985},{"name":"Function returning arrow functions","opsSec":1609734.2011633585,"samples":804978},{"name":"Function returning empty object","opsSec":1640031.0113471374,"samples":820092},{"name":"Function returning empty array","opsSec":1643517.2125948074,"samples":821760}]}-->
