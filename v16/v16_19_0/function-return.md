## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,257,375|95|
|Function returning explicitly undefined|1,276,914|93|
|Function returning implicitly undefined|1,304,674|89|
|Function returning string|1,297,973|95|
|Function returning integer|1,290,807|94|
|Function returning float|1,289,293|95|
|Function returning functions|1,262,287|98|
|Function returning arrow functions|1,279,849|92|
|Function returning empty object|1,295,688|95|
|Function returning empty array|1,269,568|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1257374.9215716491,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1276913.8770213374,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1304673.6389953776,"samples":6},{"name":"Function returning string","opsSec":1297973.0929131727,"samples":6},{"name":"Function returning integer","opsSec":1290807.329479629,"samples":4},{"name":"Function returning float","opsSec":1289293.0106554863,"samples":7},{"name":"Function returning functions","opsSec":1262286.7663142863,"samples":7},{"name":"Function returning arrow functions","opsSec":1279848.9149657504,"samples":6},{"name":"Function returning empty object","opsSec":1295688.293563907,"samples":5},{"name":"Function returning empty array","opsSec":1269568.28903663,"samples":5}]}-->
