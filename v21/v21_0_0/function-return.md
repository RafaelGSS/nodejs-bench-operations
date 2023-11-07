## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,064,113|96|
|Function returning explicitly undefined|2,058,378|99|
|Function returning implicitly undefined|2,098,983|96|
|Function returning string|2,058,964|100|
|Function returning integer|2,092,612|93|
|Function returning float|2,090,888|101|
|Function returning functions|2,024,317|98|
|Function returning arrow functions|2,051,838|96|
|Function returning empty object|2,096,004|96|
|Function returning empty array|1,991,877|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:09:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":2064112.6748855375,"samples":5},{"name":"Function returning explicitly undefined","opsSec":2058378.1271892411,"samples":5},{"name":"Function returning implicitly undefined","opsSec":2098983.2151926076,"samples":7},{"name":"Function returning string","opsSec":2058964.3904588388,"samples":5},{"name":"Function returning integer","opsSec":2092611.7723408116,"samples":7},{"name":"Function returning float","opsSec":2090887.8266918415,"samples":6},{"name":"Function returning functions","opsSec":2024316.9775803809,"samples":5},{"name":"Function returning arrow functions","opsSec":2051837.7595241077,"samples":5},{"name":"Function returning empty object","opsSec":2096003.5516086982,"samples":5},{"name":"Function returning empty array","opsSec":1991876.8277887178,"samples":5}]}-->
