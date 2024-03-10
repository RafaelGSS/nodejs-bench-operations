## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,485,692|89|
|Object.create({})|2,051,934|86|
|Cached Empty.prototype|820,036,320|97|
|Empty.prototype|2,200,878|85|
|Empty class|1,309,156|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":77485692.2771885,"samples":5},{"name":"Object.create({})","opsSec":2051933.5220277382,"samples":3},{"name":"Cached Empty.prototype","opsSec":820036320.3164455,"samples":7},{"name":"Empty.prototype","opsSec":2200878.230134978,"samples":3},{"name":"Empty class","opsSec":1309155.7074626277,"samples":3}]}-->
