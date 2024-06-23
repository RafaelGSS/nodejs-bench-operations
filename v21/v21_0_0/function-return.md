## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,598,575|799288|
|Function returning explicitly undefined|1,593,698|796850|
|Function returning implicitly undefined|1,606,484|803243|
|Function returning string|1,584,972|792487|
|Function returning integer|1,643,831|821916|
|Function returning float|1,611,350|805676|
|Function returning functions|1,587,171|793586|
|Function returning arrow functions|1,609,256|804629|
|Function returning empty object|1,636,081|818041|
|Function returning empty array|1,601,688|800845|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:34:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1598575.4431585232,"samples":799288},{"name":"Function returning explicitly undefined","opsSec":1593698.8472441707,"samples":796850},{"name":"Function returning implicitly undefined","opsSec":1606484.836665714,"samples":803243},{"name":"Function returning string","opsSec":1584972.510560284,"samples":792487},{"name":"Function returning integer","opsSec":1643831.9020888756,"samples":821916},{"name":"Function returning float","opsSec":1611350.5455430292,"samples":805676},{"name":"Function returning functions","opsSec":1587171.5646586213,"samples":793586},{"name":"Function returning arrow functions","opsSec":1609256.9721659275,"samples":804629},{"name":"Function returning empty object","opsSec":1636081.7181605892,"samples":818041},{"name":"Function returning empty array","opsSec":1601688.3282139834,"samples":800845}]}-->
