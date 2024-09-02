## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,528,323|764162|
|Function returning explicitly undefined|1,517,706|758854|
|Function returning implicitly undefined|1,530,682|765342|
|Function returning string|1,509,702|754852|
|Function returning integer|1,530,970|765486|
|Function returning float|1,522,018|761010|
|Function returning functions|1,472,750|736376|
|Function returning arrow functions|1,508,330|754166|
|Function returning empty object|1,536,697|768349|
|Function returning empty array|1,529,131|764566|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:38:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1528323.040212928,"samples":764162},{"name":"Function returning explicitly undefined","opsSec":1517706.470153221,"samples":758854},{"name":"Function returning implicitly undefined","opsSec":1530682.6652461796,"samples":765342},{"name":"Function returning string","opsSec":1509702.1068357402,"samples":754852},{"name":"Function returning integer","opsSec":1530970.864015859,"samples":765486},{"name":"Function returning float","opsSec":1522018.6849740155,"samples":761010},{"name":"Function returning functions","opsSec":1472750.2621536737,"samples":736376},{"name":"Function returning arrow functions","opsSec":1508330.3438520744,"samples":754166},{"name":"Function returning empty object","opsSec":1536697.127152326,"samples":768349},{"name":"Function returning empty array","opsSec":1529131.8103899944,"samples":764566}]}-->
