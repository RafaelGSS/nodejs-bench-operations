## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,121,536|6060769|
|Object.create({})|1,223,103|611552|
|Cached Empty.prototype|14,632,609|7316305|
|Empty.prototype|1,327,053|663529|
|Empty class|884,492|442686|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:21:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12121536.275415404,"samples":6060769},{"name":"Object.create({})","opsSec":1223103.1314540415,"samples":611552},{"name":"Cached Empty.prototype","opsSec":14632609.604170417,"samples":7316305},{"name":"Empty.prototype","opsSec":1327053.3730836513,"samples":663529},{"name":"Empty class","opsSec":884492.5169754109,"samples":442686}]}-->
