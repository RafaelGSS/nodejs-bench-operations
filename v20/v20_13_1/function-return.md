## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,583,090|791546|
|Function returning explicitly undefined|1,570,447|785224|
|Function returning implicitly undefined|1,617,162|808582|
|Function returning string|1,592,032|796017|
|Function returning integer|1,622,022|811012|
|Function returning float|1,597,017|798509|
|Function returning functions|1,581,815|790908|
|Function returning arrow functions|1,590,428|795215|
|Function returning empty object|1,619,684|809843|
|Function returning empty array|1,617,980|808991|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:32:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1583090.4833992622,"samples":791546},{"name":"Function returning explicitly undefined","opsSec":1570447.3090033801,"samples":785224},{"name":"Function returning implicitly undefined","opsSec":1617162.6642239492,"samples":808582},{"name":"Function returning string","opsSec":1592032.519408552,"samples":796017},{"name":"Function returning integer","opsSec":1622022.8386315787,"samples":811012},{"name":"Function returning float","opsSec":1597017.3899403648,"samples":798509},{"name":"Function returning functions","opsSec":1581815.4843284984,"samples":790908},{"name":"Function returning arrow functions","opsSec":1590428.1614640006,"samples":795215},{"name":"Function returning empty object","opsSec":1619684.5293265565,"samples":809843},{"name":"Function returning empty array","opsSec":1617980.8285838615,"samples":808991}]}-->
