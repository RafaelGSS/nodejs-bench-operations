## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,655,580|827791|
|Function returning explicitly undefined|1,602,425|801213|
|Function returning implicitly undefined|1,615,001|807501|
|Function returning string|1,599,019|799510|
|Function returning integer|1,635,316|817662|
|Function returning float|1,623,487|811744|
|Function returning functions|1,608,193|804097|
|Function returning arrow functions|1,636,121|818061|
|Function returning empty object|1,645,737|822870|
|Function returning empty array|1,642,171|821086|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:20:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Function returning null","opsSec":1655580.1623059562,"samples":827791},{"name":"Function returning explicitly undefined","opsSec":1602425.9679507674,"samples":801213},{"name":"Function returning implicitly undefined","opsSec":1615001.144049001,"samples":807501},{"name":"Function returning string","opsSec":1599019.9360366154,"samples":799510},{"name":"Function returning integer","opsSec":1635316.0719853947,"samples":817662},{"name":"Function returning float","opsSec":1623487.7077699166,"samples":811744},{"name":"Function returning functions","opsSec":1608193.9131575695,"samples":804097},{"name":"Function returning arrow functions","opsSec":1636121.6367810431,"samples":818061},{"name":"Function returning empty object","opsSec":1645737.9954905568,"samples":822870},{"name":"Function returning empty array","opsSec":1642171.155923107,"samples":821086}]}-->
