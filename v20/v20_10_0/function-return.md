## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,829,070|93|
|Function returning explicitly undefined|1,842,244|95|
|Function returning implicitly undefined|1,816,729|93|
|Function returning string|1,846,179|94|
|Function returning integer|1,877,807|97|
|Function returning float|1,867,811|97|
|Function returning functions|1,816,659|97|
|Function returning arrow functions|1,806,447|95|
|Function returning empty object|1,844,256|94|
|Function returning empty array|1,849,176|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1829070.2565942397,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1842243.9551007159,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1816728.8349502953,"samples":6},{"name":"Function returning string","opsSec":1846179.265802883,"samples":5},{"name":"Function returning integer","opsSec":1877807.3094897917,"samples":6},{"name":"Function returning float","opsSec":1867811.0968651439,"samples":7},{"name":"Function returning functions","opsSec":1816658.6166619863,"samples":5},{"name":"Function returning arrow functions","opsSec":1806447.2267864875,"samples":8},{"name":"Function returning empty object","opsSec":1844256.0358650535,"samples":8},{"name":"Function returning empty array","opsSec":1849175.8201989504,"samples":5}]}-->
