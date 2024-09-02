## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,446,504|723253|
|Function returning explicitly undefined|1,437,575|718788|
|Function returning implicitly undefined|1,505,885|752943|
|Function returning string|1,496,475|748238|
|Function returning integer|1,507,013|753507|
|Function returning float|1,438,580|719291|
|Function returning functions|1,437,605|718803|
|Function returning arrow functions|1,500,136|750069|
|Function returning empty object|1,467,537|733769|
|Function returning empty array|1,500,098|750050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:34:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1446504.7415416802,"samples":723253},{"name":"Function returning explicitly undefined","opsSec":1437575.3013366347,"samples":718788},{"name":"Function returning implicitly undefined","opsSec":1505885.235011844,"samples":752943},{"name":"Function returning string","opsSec":1496475.7396144453,"samples":748238},{"name":"Function returning integer","opsSec":1507013.0475643394,"samples":753507},{"name":"Function returning float","opsSec":1438580.9728528901,"samples":719291},{"name":"Function returning functions","opsSec":1437605.6837304393,"samples":718803},{"name":"Function returning arrow functions","opsSec":1500136.8809015683,"samples":750069},{"name":"Function returning empty object","opsSec":1467537.9383586661,"samples":733769},{"name":"Function returning empty array","opsSec":1500098.7609176438,"samples":750050}]}-->
