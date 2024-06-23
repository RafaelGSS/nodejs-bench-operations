## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|14,442,549|7221275|
|Object.create({})|1,914,307|957156|
|Cached Empty.prototype|19,997,492|9998747|
|Empty.prototype|1,952,720|976364|
|Empty class|1,234,701|617351|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:57:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":14442549.017910104,"samples":7221275},{"name":"Object.create({})","opsSec":1914307.979951547,"samples":957156},{"name":"Cached Empty.prototype","opsSec":19997492.440191932,"samples":9998747},{"name":"Empty.prototype","opsSec":1952720.1656837803,"samples":976364},{"name":"Empty class","opsSec":1234701.4937729484,"samples":617351}]}-->
