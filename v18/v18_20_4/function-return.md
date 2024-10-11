## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,795,403|897784|
|Function returning explicitly undefined|1,789,037|894519|
|Function returning implicitly undefined|1,786,008|893088|
|Function returning string|1,833,210|916815|
|Function returning integer|1,862,611|931355|
|Function returning float|1,810,658|905357|
|Function returning functions|1,774,920|887602|
|Function returning arrow functions|1,834,775|917527|
|Function returning empty object|1,850,521|925361|
|Function returning empty array|1,850,414|925319|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:21:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1795403.8821311344,"samples":897784},{"name":"Function returning explicitly undefined","opsSec":1789037.609989801,"samples":894519},{"name":"Function returning implicitly undefined","opsSec":1786008.9117222726,"samples":893088},{"name":"Function returning string","opsSec":1833210.1105570171,"samples":916815},{"name":"Function returning integer","opsSec":1862611.8738812602,"samples":931355},{"name":"Function returning float","opsSec":1810658.8980284152,"samples":905357},{"name":"Function returning functions","opsSec":1774920.8752715022,"samples":887602},{"name":"Function returning arrow functions","opsSec":1834775.3820191387,"samples":917527},{"name":"Function returning empty object","opsSec":1850521.4515882055,"samples":925361},{"name":"Function returning empty array","opsSec":1850414.3182163853,"samples":925319}]}-->
