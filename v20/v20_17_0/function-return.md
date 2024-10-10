## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,844,146|922074|
|Function returning explicitly undefined|1,817,571|908847|
|Function returning implicitly undefined|1,605,823|802913|
|Function returning string|1,589,029|794515|
|Function returning integer|1,612,500|806351|
|Function returning float|1,595,023|797513|
|Function returning functions|1,714,432|857224|
|Function returning arrow functions|1,655,664|828508|
|Function returning empty object|1,845,819|923103|
|Function returning empty array|1,886,556|943322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:23:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1844146.0562700569,"samples":922074},{"name":"Function returning explicitly undefined","opsSec":1817571.1394612568,"samples":908847},{"name":"Function returning implicitly undefined","opsSec":1605823.9477569947,"samples":802913},{"name":"Function returning string","opsSec":1589029.8124944821,"samples":794515},{"name":"Function returning integer","opsSec":1612500.2923384313,"samples":806351},{"name":"Function returning float","opsSec":1595023.7573965972,"samples":797513},{"name":"Function returning functions","opsSec":1714432.1997928466,"samples":857224},{"name":"Function returning arrow functions","opsSec":1655664.7623175296,"samples":828508},{"name":"Function returning empty object","opsSec":1845819.6514887467,"samples":923103},{"name":"Function returning empty array","opsSec":1886556.7995716103,"samples":943322}]}-->
