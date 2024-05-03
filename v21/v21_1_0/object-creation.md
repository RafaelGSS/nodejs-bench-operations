## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|90,623,440|91|
|Object.create({})|2,856,175|88|
|Cached Empty.prototype|912,493,401|100|
|Empty.prototype|2,665,477|84|
|Empty class|1,683,411|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:54:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":90623440.24662656,"samples":7},{"name":"Object.create({})","opsSec":2856175.225003506,"samples":3},{"name":"Cached Empty.prototype","opsSec":912493401.4523312,"samples":6},{"name":"Empty.prototype","opsSec":2665476.8295552805,"samples":4},{"name":"Empty class","opsSec":1683410.6566520878,"samples":3}]}-->
