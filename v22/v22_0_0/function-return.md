## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,357,030|678516|
|Function returning explicitly undefined|1,351,188|675595|
|Function returning implicitly undefined|1,354,330|677166|
|Function returning string|1,353,349|676675|
|Function returning integer|1,358,415|679208|
|Function returning float|1,356,520|678261|
|Function returning functions|1,267,572|633787|
|Function returning arrow functions|1,355,035|677518|
|Function returning empty object|1,391,628|695815|
|Function returning empty array|1,380,330|690166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:15:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1357030.2630037016,"samples":678516},{"name":"Function returning explicitly undefined","opsSec":1351188.2731798831,"samples":675595},{"name":"Function returning implicitly undefined","opsSec":1354330.6294195012,"samples":677166},{"name":"Function returning string","opsSec":1353349.3693414421,"samples":676675},{"name":"Function returning integer","opsSec":1358415.3533916217,"samples":679208},{"name":"Function returning float","opsSec":1356520.9527609989,"samples":678261},{"name":"Function returning functions","opsSec":1267572.5220152512,"samples":633787},{"name":"Function returning arrow functions","opsSec":1355035.1192228026,"samples":677518},{"name":"Function returning empty object","opsSec":1391628.691865306,"samples":695815},{"name":"Function returning empty array","opsSec":1380330.746661648,"samples":690166}]}-->
