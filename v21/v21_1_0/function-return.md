## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,301,754|92|
|Function returning explicitly undefined|1,277,507|90|
|Function returning implicitly undefined|1,319,054|96|
|Function returning string|1,297,929|92|
|Function returning integer|1,335,902|94|
|Function returning float|1,294,484|95|
|Function returning functions|1,274,804|95|
|Function returning arrow functions|1,365,989|81|
|Function returning empty object|1,403,914|92|
|Function returning empty array|1,386,123|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1301753.6845019844,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1277507.4359567645,"samples":4},{"name":"Function returning implicitly undefined","opsSec":1319054.2487943482,"samples":6},{"name":"Function returning string","opsSec":1297928.6314036364,"samples":5},{"name":"Function returning integer","opsSec":1335902.1542302736,"samples":5},{"name":"Function returning float","opsSec":1294483.5370170095,"samples":6},{"name":"Function returning functions","opsSec":1274803.6445392233,"samples":4},{"name":"Function returning arrow functions","opsSec":1365989.2413332737,"samples":5},{"name":"Function returning empty object","opsSec":1403914.4835316588,"samples":7},{"name":"Function returning empty array","opsSec":1386122.7244744918,"samples":5}]}-->
