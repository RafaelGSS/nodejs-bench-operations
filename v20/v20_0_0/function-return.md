## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,266,535|633268|
|Function returning explicitly undefined|1,336,948|668475|
|Function returning implicitly undefined|1,367,927|683964|
|Function returning string|1,342,458|671230|
|Function returning integer|1,376,995|688498|
|Function returning float|1,348,375|674188|
|Function returning functions|1,331,879|665940|
|Function returning arrow functions|1,363,710|681856|
|Function returning empty object|1,381,021|690511|
|Function returning empty array|1,380,713|690357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:12:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1266535.0570066017,"samples":633268},{"name":"Function returning explicitly undefined","opsSec":1336948.7362074445,"samples":668475},{"name":"Function returning implicitly undefined","opsSec":1367927.968237076,"samples":683964},{"name":"Function returning string","opsSec":1342458.6251168596,"samples":671230},{"name":"Function returning integer","opsSec":1376995.1879109845,"samples":688498},{"name":"Function returning float","opsSec":1348375.7112777547,"samples":674188},{"name":"Function returning functions","opsSec":1331879.4648129551,"samples":665940},{"name":"Function returning arrow functions","opsSec":1363710.1850215958,"samples":681856},{"name":"Function returning empty object","opsSec":1381021.7372006555,"samples":690511},{"name":"Function returning empty array","opsSec":1380713.186744418,"samples":690357}]}-->
