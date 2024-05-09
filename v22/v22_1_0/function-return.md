## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,641,719|820860|
|Function returning explicitly undefined|1,675,762|837882|
|Function returning implicitly undefined|1,704,263|852132|
|Function returning string|1,629,128|814565|
|Function returning integer|1,709,922|854962|
|Function returning float|1,670,495|835248|
|Function returning functions|1,638,826|819414|
|Function returning arrow functions|1,602,700|801351|
|Function returning empty object|1,630,769|815385|
|Function returning empty array|1,618,101|809051|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:37:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1641719.6782228108,"samples":820860},{"name":"Function returning explicitly undefined","opsSec":1675762.833669604,"samples":837882},{"name":"Function returning implicitly undefined","opsSec":1704263.3966911996,"samples":852132},{"name":"Function returning string","opsSec":1629128.6575972827,"samples":814565},{"name":"Function returning integer","opsSec":1709922.4850108123,"samples":854962},{"name":"Function returning float","opsSec":1670495.7160148695,"samples":835248},{"name":"Function returning functions","opsSec":1638826.8855961838,"samples":819414},{"name":"Function returning arrow functions","opsSec":1602700.7434841217,"samples":801351},{"name":"Function returning empty object","opsSec":1630769.109602399,"samples":815385},{"name":"Function returning empty array","opsSec":1618101.1100441942,"samples":809051}]}-->
