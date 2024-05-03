## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,922,084|96|
|Function returning explicitly undefined|1,942,204|95|
|Function returning implicitly undefined|1,901,454|94|
|Function returning string|1,925,977|96|
|Function returning integer|1,941,279|99|
|Function returning float|1,946,706|99|
|Function returning functions|1,920,978|99|
|Function returning arrow functions|1,928,841|99|
|Function returning empty object|1,918,960|96|
|Function returning empty array|1,959,642|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:09:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1922083.8438991518,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1942204.4439900506,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1901453.8250584775,"samples":5},{"name":"Function returning string","opsSec":1925976.869362837,"samples":7},{"name":"Function returning integer","opsSec":1941278.5559627765,"samples":5},{"name":"Function returning float","opsSec":1946706.0888306343,"samples":5},{"name":"Function returning functions","opsSec":1920977.5173730904,"samples":6},{"name":"Function returning arrow functions","opsSec":1928841.3259237027,"samples":5},{"name":"Function returning empty object","opsSec":1918960.0831476008,"samples":5},{"name":"Function returning empty array","opsSec":1959642.0754714785,"samples":5}]}-->
