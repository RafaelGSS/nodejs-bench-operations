## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,429,171|714586|
|Function returning explicitly undefined|1,416,343|708177|
|Function returning implicitly undefined|1,451,387|725694|
|Function returning string|1,420,873|710437|
|Function returning integer|1,460,338|730170|
|Function returning float|1,477,395|738698|
|Function returning functions|1,446,247|723124|
|Function returning arrow functions|1,465,679|732840|
|Function returning empty object|1,483,059|741530|
|Function returning empty array|1,471,744|735873|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:11:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1429171.3654473922,"samples":714586},{"name":"Function returning explicitly undefined","opsSec":1416343.3604282176,"samples":708177},{"name":"Function returning implicitly undefined","opsSec":1451387.6603735515,"samples":725694},{"name":"Function returning string","opsSec":1420873.087796233,"samples":710437},{"name":"Function returning integer","opsSec":1460338.6126790277,"samples":730170},{"name":"Function returning float","opsSec":1477395.3883592847,"samples":738698},{"name":"Function returning functions","opsSec":1446247.140922478,"samples":723124},{"name":"Function returning arrow functions","opsSec":1465679.111792943,"samples":732840},{"name":"Function returning empty object","opsSec":1483059.1991517325,"samples":741530},{"name":"Function returning empty array","opsSec":1471744.860870645,"samples":735873}]}-->
