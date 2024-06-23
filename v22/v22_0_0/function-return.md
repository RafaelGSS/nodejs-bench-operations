## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,675,461|837731|
|Function returning explicitly undefined|1,684,392|842197|
|Function returning implicitly undefined|1,695,872|847937|
|Function returning string|1,673,905|836953|
|Function returning integer|1,710,044|855023|
|Function returning float|1,709,287|854644|
|Function returning functions|1,656,490|828246|
|Function returning arrow functions|1,666,302|833152|
|Function returning empty object|1,686,007|843004|
|Function returning empty array|1,695,008|847505|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:33:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1675461.5576777735,"samples":837731},{"name":"Function returning explicitly undefined","opsSec":1684392.6289036234,"samples":842197},{"name":"Function returning implicitly undefined","opsSec":1695872.1955913282,"samples":847937},{"name":"Function returning string","opsSec":1673905.1831345984,"samples":836953},{"name":"Function returning integer","opsSec":1710044.0950098818,"samples":855023},{"name":"Function returning float","opsSec":1709287.3367967336,"samples":854644},{"name":"Function returning functions","opsSec":1656490.24080729,"samples":828246},{"name":"Function returning arrow functions","opsSec":1666302.896910258,"samples":833152},{"name":"Function returning empty object","opsSec":1686007.8752330747,"samples":843004},{"name":"Function returning empty array","opsSec":1695008.2507537296,"samples":847505}]}-->
