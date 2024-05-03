## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|94,765,862|92|
|Object.create({})|2,856,820|89|
|Cached Empty.prototype|938,342,058|100|
|Empty.prototype|2,705,193|80|
|Empty class|1,671,817|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:48:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":94765862.15978219,"samples":5},{"name":"Object.create({})","opsSec":2856819.513036464,"samples":3},{"name":"Cached Empty.prototype","opsSec":938342057.8038332,"samples":7},{"name":"Empty.prototype","opsSec":2705192.7115455037,"samples":3},{"name":"Empty class","opsSec":1671817.4123758094,"samples":3}]}-->
