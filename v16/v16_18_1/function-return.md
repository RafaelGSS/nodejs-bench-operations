## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,052,262|85|
|Function returning explicitly undefined|976,911|85|
|Function returning implicitly undefined|1,057,475|87|
|Function returning string|1,053,573|81|
|Function returning integer|1,049,404|87|
|Function returning float|1,053,170|88|
|Function returning functions|1,019,629|86|
|Function returning arrow functions|1,034,489|88|
|Function returning empty object|1,027,462|87|
|Function returning empty array|1,031,754|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1052262.248917175,"samples":6},{"name":"Function returning explicitly undefined","opsSec":976910.8544883224,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1057474.5621459591,"samples":3},{"name":"Function returning string","opsSec":1053573.2532060803,"samples":4},{"name":"Function returning integer","opsSec":1049404.0106799044,"samples":6},{"name":"Function returning float","opsSec":1053170.4771737237,"samples":6},{"name":"Function returning functions","opsSec":1019629.3022619856,"samples":5},{"name":"Function returning arrow functions","opsSec":1034489.2442234678,"samples":4},{"name":"Function returning empty object","opsSec":1027461.7455570627,"samples":4},{"name":"Function returning empty array","opsSec":1031753.9565446102,"samples":5}]}-->
