## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|67,157,057|97|
|Object.create({})|1,849,100|81|
|Cached Empty.prototype|847,465,916|100|
|Empty.prototype|2,104,646|87|
|Empty class|1,233,102|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:25:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":67157057.21986364,"samples":6},{"name":"Object.create({})","opsSec":1849100.2226923124,"samples":3},{"name":"Cached Empty.prototype","opsSec":847465915.5803816,"samples":11},{"name":"Empty.prototype","opsSec":2104646.296641374,"samples":3},{"name":"Empty class","opsSec":1233102.4465527767,"samples":3}]}-->
