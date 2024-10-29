## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,624,030|812018|
|Function returning explicitly undefined|1,599,612|799807|
|Function returning implicitly undefined|1,583,593|791798|
|Function returning string|1,606,973|803487|
|Function returning integer|1,655,139|827700|
|Function returning float|1,643,491|821747|
|Function returning functions|1,593,579|796879|
|Function returning arrow functions|1,682,182|841092|
|Function returning empty object|1,644,086|822758|
|Function returning empty array|1,659,209|829606|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:51:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1624030.1469953503,"samples":812018},{"name":"Function returning explicitly undefined","opsSec":1599612.8866694306,"samples":799807},{"name":"Function returning implicitly undefined","opsSec":1583593.5929377386,"samples":791798},{"name":"Function returning string","opsSec":1606973.932507095,"samples":803487},{"name":"Function returning integer","opsSec":1655139.3784431915,"samples":827700},{"name":"Function returning float","opsSec":1643491.2882393745,"samples":821747},{"name":"Function returning functions","opsSec":1593579.1366776994,"samples":796879},{"name":"Function returning arrow functions","opsSec":1682182.3548256569,"samples":841092},{"name":"Function returning empty object","opsSec":1644086.8511992055,"samples":822758},{"name":"Function returning empty array","opsSec":1659209.0034685398,"samples":829606}]}-->
