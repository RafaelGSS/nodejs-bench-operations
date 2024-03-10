## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,901,532|98|
|Function returning explicitly undefined|1,874,111|94|
|Function returning implicitly undefined|1,928,723|96|
|Function returning string|1,853,795|97|
|Function returning integer|1,900,533|95|
|Function returning float|1,905,013|94|
|Function returning functions|1,806,755|93|
|Function returning arrow functions|1,895,263|98|
|Function returning empty object|1,856,760|96|
|Function returning empty array|1,910,422|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Function returning null","opsSec":1901532.1549706422,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1874111.1982770236,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1928723.4271044573,"samples":6},{"name":"Function returning string","opsSec":1853795.2381768778,"samples":8},{"name":"Function returning integer","opsSec":1900533.3385676139,"samples":5},{"name":"Function returning float","opsSec":1905013.3661353458,"samples":5},{"name":"Function returning functions","opsSec":1806755.1679650191,"samples":5},{"name":"Function returning arrow functions","opsSec":1895263.427545549,"samples":6},{"name":"Function returning empty object","opsSec":1856760.1805894068,"samples":6},{"name":"Function returning empty array","opsSec":1910422.1257659055,"samples":8}]}-->
