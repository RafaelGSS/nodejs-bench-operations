## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,657,930|6828966|
|Object.create({})|1,513,980|756991|
|Cached Empty.prototype|17,003,608|8501805|
|Empty.prototype|1,515,431|757716|
|Empty class|982,580|491291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:02:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13657930.528150417,"samples":6828966},{"name":"Object.create({})","opsSec":1513980.766234813,"samples":756991},{"name":"Cached Empty.prototype","opsSec":17003608.921642307,"samples":8501805},{"name":"Empty.prototype","opsSec":1515431.8706520535,"samples":757716},{"name":"Empty class","opsSec":982580.9453364811,"samples":491291}]}-->
