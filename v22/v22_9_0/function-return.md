## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,926,490|963453|
|Function returning explicitly undefined|1,858,048|930461|
|Function returning implicitly undefined|1,708,379|854225|
|Function returning string|1,866,335|933451|
|Function returning integer|1,733,730|866880|
|Function returning float|1,858,100|929478|
|Function returning functions|1,818,245|909586|
|Function returning arrow functions|1,735,588|867868|
|Function returning empty object|1,749,101|874652|
|Function returning empty array|1,772,475|887711|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:13:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1926490.7718849909,"samples":963453},{"name":"Function returning explicitly undefined","opsSec":1858048.988036151,"samples":930461},{"name":"Function returning implicitly undefined","opsSec":1708379.949588547,"samples":854225},{"name":"Function returning string","opsSec":1866335.8507523458,"samples":933451},{"name":"Function returning integer","opsSec":1733730.2353193199,"samples":866880},{"name":"Function returning float","opsSec":1858100.8053881184,"samples":929478},{"name":"Function returning functions","opsSec":1818245.4148636037,"samples":909586},{"name":"Function returning arrow functions","opsSec":1735588.4923340366,"samples":867868},{"name":"Function returning empty object","opsSec":1749101.6044569416,"samples":874652},{"name":"Function returning empty array","opsSec":1772475.5076151607,"samples":887711}]}-->
