## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,381,418|690710|
|Function returning explicitly undefined|1,355,031|677516|
|Function returning implicitly undefined|1,379,223|689612|
|Function returning string|1,344,995|672498|
|Function returning integer|1,378,580|689291|
|Function returning float|1,319,056|659529|
|Function returning functions|1,338,271|669136|
|Function returning arrow functions|1,364,492|682247|
|Function returning empty object|1,375,229|687615|
|Function returning empty array|1,377,424|688713|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:32:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1381418.7619949207,"samples":690710},{"name":"Function returning explicitly undefined","opsSec":1355031.9073636977,"samples":677516},{"name":"Function returning implicitly undefined","opsSec":1379223.6372052245,"samples":689612},{"name":"Function returning string","opsSec":1344995.9704305315,"samples":672498},{"name":"Function returning integer","opsSec":1378580.269522255,"samples":689291},{"name":"Function returning float","opsSec":1319056.901892584,"samples":659529},{"name":"Function returning functions","opsSec":1338271.5872969576,"samples":669136},{"name":"Function returning arrow functions","opsSec":1364492.243364408,"samples":682247},{"name":"Function returning empty object","opsSec":1375229.5950652852,"samples":687615},{"name":"Function returning empty array","opsSec":1377424.1343935672,"samples":688713}]}-->
