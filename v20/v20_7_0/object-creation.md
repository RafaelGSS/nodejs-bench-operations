## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,798,708|90|
|Object.create({})|1,502,994|77|
|Cached Empty.prototype|720,537,702|97|
|Empty.prototype|1,441,729|72|
|Empty class|990,309|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":50798707.97738807,"samples":5},{"name":"Object.create({})","opsSec":1502994.331539086,"samples":3},{"name":"Cached Empty.prototype","opsSec":720537702.370024,"samples":7},{"name":"Empty.prototype","opsSec":1441729.2104732094,"samples":3},{"name":"Empty class","opsSec":990309.3676645184,"samples":3}]}-->
