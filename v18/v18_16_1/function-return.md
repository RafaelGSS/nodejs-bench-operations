## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,835,093|98|
|Function returning explicitly undefined|1,812,670|94|
|Function returning implicitly undefined|1,855,742|92|
|Function returning string|1,812,482|98|
|Function returning integer|1,847,252|96|
|Function returning float|1,832,637|96|
|Function returning functions|1,771,339|96|
|Function returning arrow functions|1,817,057|98|
|Function returning empty object|1,853,535|98|
|Function returning empty array|1,828,461|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:58:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1835092.79790616,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1812670.075631727,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1855741.9376233919,"samples":6},{"name":"Function returning string","opsSec":1812482.0812505702,"samples":5},{"name":"Function returning integer","opsSec":1847252.458260646,"samples":7},{"name":"Function returning float","opsSec":1832636.6642706348,"samples":5},{"name":"Function returning functions","opsSec":1771338.5721204588,"samples":7},{"name":"Function returning arrow functions","opsSec":1817056.926147935,"samples":6},{"name":"Function returning empty object","opsSec":1853535.01181154,"samples":5},{"name":"Function returning empty array","opsSec":1828461.1144877556,"samples":5}]}-->
