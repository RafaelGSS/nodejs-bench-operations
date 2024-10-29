## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,808,205|904104|
|Function returning explicitly undefined|1,705,170|853094|
|Function returning implicitly undefined|1,790,056|895029|
|Function returning string|1,735,811|867941|
|Function returning integer|1,697,248|848625|
|Function returning float|1,777,149|888741|
|Function returning functions|1,773,976|888840|
|Function returning arrow functions|1,813,573|906793|
|Function returning empty object|1,835,470|917736|
|Function returning empty array|1,798,577|899810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:53:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1808205.4902107795,"samples":904104},{"name":"Function returning explicitly undefined","opsSec":1705170.9644196397,"samples":853094},{"name":"Function returning implicitly undefined","opsSec":1790056.9152255096,"samples":895029},{"name":"Function returning string","opsSec":1735811.88014329,"samples":867941},{"name":"Function returning integer","opsSec":1697248.6897240116,"samples":848625},{"name":"Function returning float","opsSec":1777149.4953294238,"samples":888741},{"name":"Function returning functions","opsSec":1773976.9756254018,"samples":888840},{"name":"Function returning arrow functions","opsSec":1813573.4210547518,"samples":906793},{"name":"Function returning empty object","opsSec":1835470.1682007723,"samples":917736},{"name":"Function returning empty array","opsSec":1798577.7529693984,"samples":899810}]}-->
