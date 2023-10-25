## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,098,511|96|
|Function returning explicitly undefined|1,086,017|98|
|Function returning implicitly undefined|1,098,243|93|
|Function returning string|1,103,987|97|
|Function returning integer|1,099,816|96|
|Function returning float|1,108,111|94|
|Function returning functions|1,085,130|98|
|Function returning arrow functions|1,093,252|95|
|Function returning empty object|1,112,520|96|
|Function returning empty array|1,064,301|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1098510.9803452604,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1086016.539035531,"samples":8},{"name":"Function returning implicitly undefined","opsSec":1098242.6688289894,"samples":5},{"name":"Function returning string","opsSec":1103986.8751665729,"samples":7},{"name":"Function returning integer","opsSec":1099815.8211284282,"samples":5},{"name":"Function returning float","opsSec":1108110.7648865841,"samples":7},{"name":"Function returning functions","opsSec":1085130.3060041699,"samples":7},{"name":"Function returning arrow functions","opsSec":1093252.079509895,"samples":5},{"name":"Function returning empty object","opsSec":1112519.751059469,"samples":7},{"name":"Function returning empty array","opsSec":1064301.4542928648,"samples":5}]}-->
