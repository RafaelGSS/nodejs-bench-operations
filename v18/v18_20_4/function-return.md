## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,497,800|748901|
|Function returning explicitly undefined|1,445,322|722662|
|Function returning implicitly undefined|1,569,513|784757|
|Function returning string|1,474,992|737497|
|Function returning integer|1,567,544|783773|
|Function returning float|1,533,048|766525|
|Function returning functions|1,514,842|757422|
|Function returning arrow functions|1,528,758|764380|
|Function returning empty object|1,539,782|769892|
|Function returning empty array|1,564,051|782026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:32:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1497800.6423929248,"samples":748901},{"name":"Function returning explicitly undefined","opsSec":1445322.756247056,"samples":722662},{"name":"Function returning implicitly undefined","opsSec":1569513.0054875952,"samples":784757},{"name":"Function returning string","opsSec":1474992.55661315,"samples":737497},{"name":"Function returning integer","opsSec":1567544.2175627379,"samples":783773},{"name":"Function returning float","opsSec":1533048.3200689328,"samples":766525},{"name":"Function returning functions","opsSec":1514842.8604062526,"samples":757422},{"name":"Function returning arrow functions","opsSec":1528758.244039605,"samples":764380},{"name":"Function returning empty object","opsSec":1539782.3334086514,"samples":769892},{"name":"Function returning empty array","opsSec":1564051.0556803246,"samples":782026}]}-->
