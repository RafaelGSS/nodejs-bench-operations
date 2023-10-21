## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,252,737|92|
|Function returning explicitly undefined|1,254,814|95|
|Function returning implicitly undefined|1,269,854|94|
|Function returning string|1,232,438|97|
|Function returning integer|1,280,857|93|
|Function returning float|1,257,636|97|
|Function returning functions|1,237,350|97|
|Function returning arrow functions|1,256,851|98|
|Function returning empty object|1,276,047|98|
|Function returning empty array|1,261,271|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1252737.2345831003,"samples":8},{"name":"Function returning explicitly undefined","opsSec":1254814.049406034,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1269854.3195056675,"samples":7},{"name":"Function returning string","opsSec":1232437.5828259175,"samples":7},{"name":"Function returning integer","opsSec":1280856.6808250404,"samples":5},{"name":"Function returning float","opsSec":1257635.5028520224,"samples":5},{"name":"Function returning functions","opsSec":1237349.8860679846,"samples":7},{"name":"Function returning arrow functions","opsSec":1256851.1097524925,"samples":3},{"name":"Function returning empty object","opsSec":1276046.6928292823,"samples":6},{"name":"Function returning empty array","opsSec":1261271.1422705783,"samples":6}]}-->
