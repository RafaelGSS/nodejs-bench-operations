## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|86,101,485|92|
|Object.create({})|2,185,370|85|
|Cached Empty.prototype|910,361,111|100|
|Empty.prototype|2,397,738|93|
|Empty class|1,439,552|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:45:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":86101485.06043148,"samples":6},{"name":"Object.create({})","opsSec":2185369.934796001,"samples":3},{"name":"Cached Empty.prototype","opsSec":910361110.7679226,"samples":6},{"name":"Empty.prototype","opsSec":2397738.3268396812,"samples":5},{"name":"Empty class","opsSec":1439552.3335358726,"samples":3}]}-->
