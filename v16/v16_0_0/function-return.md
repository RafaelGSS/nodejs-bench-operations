## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,229,192|98|
|Function returning explicitly undefined|1,218,897|92|
|Function returning implicitly undefined|1,247,926|95|
|Function returning string|1,223,366|97|
|Function returning integer|1,257,808|96|
|Function returning float|1,224,722|98|
|Function returning functions|1,188,170|93|
|Function returning arrow functions|1,209,923|98|
|Function returning empty object|1,229,750|98|
|Function returning empty array|1,224,270|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1229192.3658622648,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1218897.0666742728,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1247926.0538724272,"samples":6},{"name":"Function returning string","opsSec":1223365.8214421738,"samples":7},{"name":"Function returning integer","opsSec":1257808.3604147849,"samples":7},{"name":"Function returning float","opsSec":1224721.9414767674,"samples":6},{"name":"Function returning functions","opsSec":1188170.446644452,"samples":7},{"name":"Function returning arrow functions","opsSec":1209923.3662787008,"samples":7},{"name":"Function returning empty object","opsSec":1229750.0963034616,"samples":7},{"name":"Function returning empty array","opsSec":1224269.8038920278,"samples":6}]}-->
