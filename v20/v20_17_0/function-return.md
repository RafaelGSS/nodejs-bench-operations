## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,842,335|922626|
|Function returning explicitly undefined|1,833,188|916659|
|Function returning implicitly undefined|1,612,332|806469|
|Function returning string|1,592,393|796224|
|Function returning integer|1,615,449|807725|
|Function returning float|1,600,575|800300|
|Function returning functions|1,728,963|864930|
|Function returning arrow functions|1,667,010|833713|
|Function returning empty object|1,893,860|947624|
|Function returning empty array|1,900,973|951022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:22:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1842335.788787957,"samples":922626},{"name":"Function returning explicitly undefined","opsSec":1833188.2176069464,"samples":916659},{"name":"Function returning implicitly undefined","opsSec":1612332.2145403528,"samples":806469},{"name":"Function returning string","opsSec":1592393.1133941675,"samples":796224},{"name":"Function returning integer","opsSec":1615449.5121342475,"samples":807725},{"name":"Function returning float","opsSec":1600575.4855858628,"samples":800300},{"name":"Function returning functions","opsSec":1728963.446005074,"samples":864930},{"name":"Function returning arrow functions","opsSec":1667010.3076416452,"samples":833713},{"name":"Function returning empty object","opsSec":1893860.5804650784,"samples":947624},{"name":"Function returning empty array","opsSec":1900973.5959856252,"samples":951022}]}-->
