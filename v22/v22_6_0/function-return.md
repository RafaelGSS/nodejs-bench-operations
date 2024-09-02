## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,547,899|773950|
|Function returning explicitly undefined|1,533,164|766583|
|Function returning implicitly undefined|1,550,804|775403|
|Function returning string|1,547,600|773801|
|Function returning integer|1,559,297|779649|
|Function returning float|1,545,945|772973|
|Function returning functions|1,511,451|755726|
|Function returning arrow functions|1,535,293|767647|
|Function returning empty object|1,556,295|778148|
|Function returning empty array|1,526,814|763408|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:37:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1547899.1858067291,"samples":773950},{"name":"Function returning explicitly undefined","opsSec":1533164.629352594,"samples":766583},{"name":"Function returning implicitly undefined","opsSec":1550804.9547565256,"samples":775403},{"name":"Function returning string","opsSec":1547600.7371621227,"samples":773801},{"name":"Function returning integer","opsSec":1559297.3450858511,"samples":779649},{"name":"Function returning float","opsSec":1545945.295050889,"samples":772973},{"name":"Function returning functions","opsSec":1511451.3198470718,"samples":755726},{"name":"Function returning arrow functions","opsSec":1535293.7881273634,"samples":767647},{"name":"Function returning empty object","opsSec":1556295.9844432627,"samples":778148},{"name":"Function returning empty array","opsSec":1526814.1586583573,"samples":763408}]}-->
