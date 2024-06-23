## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,592,954|796478|
|Function returning explicitly undefined|1,591,630|795816|
|Function returning implicitly undefined|1,677,275|838638|
|Function returning string|1,572,788|786395|
|Function returning integer|1,655,295|827648|
|Function returning float|1,636,385|818193|
|Function returning functions|1,586,350|793176|
|Function returning arrow functions|1,599,858|799930|
|Function returning empty object|1,634,687|817344|
|Function returning empty array|1,632,157|816079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:30:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1592954.8050144352,"samples":796478},{"name":"Function returning explicitly undefined","opsSec":1591630.711220674,"samples":795816},{"name":"Function returning implicitly undefined","opsSec":1677275.1211089548,"samples":838638},{"name":"Function returning string","opsSec":1572788.2096678163,"samples":786395},{"name":"Function returning integer","opsSec":1655295.0492436986,"samples":827648},{"name":"Function returning float","opsSec":1636385.69276558,"samples":818193},{"name":"Function returning functions","opsSec":1586350.860766105,"samples":793176},{"name":"Function returning arrow functions","opsSec":1599858.773973628,"samples":799930},{"name":"Function returning empty object","opsSec":1634687.817566689,"samples":817344},{"name":"Function returning empty array","opsSec":1632157.719180091,"samples":816079}]}-->
