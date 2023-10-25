## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,010,959|77|
|Function returning explicitly undefined|1,131,852|82|
|Function returning implicitly undefined|1,202,509|83|
|Function returning string|1,056,078|83|
|Function returning integer|1,101,463|86|
|Function returning float|1,090,177|85|
|Function returning functions|1,071,342|85|
|Function returning arrow functions|1,121,532|87|
|Function returning empty object|1,142,280|86|
|Function returning empty array|1,112,998|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1010959.3514157808,"samples":3},{"name":"Function returning explicitly undefined","opsSec":1131852.367041331,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1202508.5072437522,"samples":4},{"name":"Function returning string","opsSec":1056078.1520831063,"samples":5},{"name":"Function returning integer","opsSec":1101463.430089361,"samples":7},{"name":"Function returning float","opsSec":1090176.9228720183,"samples":5},{"name":"Function returning functions","opsSec":1071341.8649447905,"samples":4},{"name":"Function returning arrow functions","opsSec":1121531.9366269219,"samples":6},{"name":"Function returning empty object","opsSec":1142280.4439075452,"samples":5},{"name":"Function returning empty array","opsSec":1112997.904639185,"samples":7}]}-->
