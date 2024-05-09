## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,108,335|6554168|
|Object.create({})|1,478,525|739265|
|Cached Empty.prototype|16,924,559|8462280|
|Empty.prototype|1,516,640|758321|
|Empty class|1,016,983|508492|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:03:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13108335.48120506,"samples":6554168},{"name":"Object.create({})","opsSec":1478525.8897562325,"samples":739265},{"name":"Cached Empty.prototype","opsSec":16924559.23332542,"samples":8462280},{"name":"Empty.prototype","opsSec":1516640.9499270157,"samples":758321},{"name":"Empty class","opsSec":1016983.2362267509,"samples":508492}]}-->
