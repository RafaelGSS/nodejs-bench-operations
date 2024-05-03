## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|89,884,537|95|
|Object.create({})|2,902,479|84|
|Cached Empty.prototype|911,441,991|99|
|Empty.prototype|2,703,099|88|
|Empty class|1,652,578|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:49:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":89884537.40548731,"samples":5},{"name":"Object.create({})","opsSec":2902479.1859186287,"samples":4},{"name":"Cached Empty.prototype","opsSec":911441991.11608,"samples":5},{"name":"Empty.prototype","opsSec":2703099.1167327003,"samples":5},{"name":"Empty class","opsSec":1652577.9790392108,"samples":4}]}-->
