## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,820,186|910183|
|Function returning explicitly undefined|1,741,928|871051|
|Function returning implicitly undefined|1,798,806|899504|
|Function returning string|1,820,229|910195|
|Function returning integer|1,866,879|933501|
|Function returning float|1,850,453|925228|
|Function returning functions|1,785,912|893007|
|Function returning arrow functions|1,834,506|917254|
|Function returning empty object|1,839,034|919669|
|Function returning empty array|1,857,791|928896|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:47:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1820186.4822879978,"samples":910183},{"name":"Function returning explicitly undefined","opsSec":1741928.4969539891,"samples":871051},{"name":"Function returning implicitly undefined","opsSec":1798806.6703622262,"samples":899504},{"name":"Function returning string","opsSec":1820229.1718312937,"samples":910195},{"name":"Function returning integer","opsSec":1866879.2900242668,"samples":933501},{"name":"Function returning float","opsSec":1850453.9052861794,"samples":925228},{"name":"Function returning functions","opsSec":1785912.8851842668,"samples":893007},{"name":"Function returning arrow functions","opsSec":1834506.8369226654,"samples":917254},{"name":"Function returning empty object","opsSec":1839034.4931033961,"samples":919669},{"name":"Function returning empty array","opsSec":1857791.3274795394,"samples":928896}]}-->
