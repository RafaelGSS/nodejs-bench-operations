## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,915,636|94|
|Function returning explicitly undefined|1,923,690|94|
|Function returning implicitly undefined|1,978,612|95|
|Function returning string|1,937,015|99|
|Function returning integer|1,888,414|98|
|Function returning float|1,952,582|97|
|Function returning functions|1,896,174|96|
|Function returning arrow functions|1,635,333|97|
|Function returning empty object|1,957,180|100|
|Function returning empty array|1,678,160|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:00:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1915636.4431936732,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1923690.0382367373,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1978611.811232684,"samples":8},{"name":"Function returning string","opsSec":1937015.0995271993,"samples":9},{"name":"Function returning integer","opsSec":1888414.4185109471,"samples":7},{"name":"Function returning float","opsSec":1952581.8240767533,"samples":7},{"name":"Function returning functions","opsSec":1896174.4784068987,"samples":10},{"name":"Function returning arrow functions","opsSec":1635332.7296354542,"samples":8},{"name":"Function returning empty object","opsSec":1957180.1904315152,"samples":6},{"name":"Function returning empty array","opsSec":1678160.0845767388,"samples":6}]}-->
