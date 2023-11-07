## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,731,706|96|
|Function returning explicitly undefined|1,737,499|100|
|Function returning implicitly undefined|1,776,405|97|
|Function returning string|1,724,649|99|
|Function returning integer|1,758,703|98|
|Function returning float|1,754,882|97|
|Function returning functions|1,711,067|100|
|Function returning arrow functions|1,723,796|100|
|Function returning empty object|1,751,639|97|
|Function returning empty array|1,687,651|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:04:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1731706.4324786693,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1737498.9096951755,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1776404.7422540006,"samples":6},{"name":"Function returning string","opsSec":1724649.4644380081,"samples":7},{"name":"Function returning integer","opsSec":1758702.9174744554,"samples":5},{"name":"Function returning float","opsSec":1754882.1111883367,"samples":6},{"name":"Function returning functions","opsSec":1711067.0753823703,"samples":6},{"name":"Function returning arrow functions","opsSec":1723796.4410161278,"samples":9},{"name":"Function returning empty object","opsSec":1751638.954579271,"samples":6},{"name":"Function returning empty array","opsSec":1687651.4353255958,"samples":6}]}-->
