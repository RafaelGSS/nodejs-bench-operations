## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,656,007|828004|
|Function returning explicitly undefined|1,681,089|840545|
|Function returning implicitly undefined|1,711,043|855522|
|Function returning string|1,663,564|831783|
|Function returning integer|1,711,538|855770|
|Function returning float|1,693,534|846768|
|Function returning functions|1,667,595|833798|
|Function returning arrow functions|1,680,141|840072|
|Function returning empty object|1,693,944|846973|
|Function returning empty array|1,700,180|850091|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:56:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1656007.4203971284,"samples":828004},{"name":"Function returning explicitly undefined","opsSec":1681089.0485038268,"samples":840545},{"name":"Function returning implicitly undefined","opsSec":1711043.4695762966,"samples":855522},{"name":"Function returning string","opsSec":1663564.26656662,"samples":831783},{"name":"Function returning integer","opsSec":1711538.5725772658,"samples":855770},{"name":"Function returning float","opsSec":1693534.259047292,"samples":846768},{"name":"Function returning functions","opsSec":1667595.0528071239,"samples":833798},{"name":"Function returning arrow functions","opsSec":1680141.6410811746,"samples":840072},{"name":"Function returning empty object","opsSec":1693944.9531426444,"samples":846973},{"name":"Function returning empty array","opsSec":1700180.1468053753,"samples":850091}]}-->
