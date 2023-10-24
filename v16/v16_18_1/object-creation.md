## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,374,367|94|
|Object.create({})|1,250,855|79|
|Cached Empty.prototype|715,010,144|97|
|Empty.prototype|1,294,328|75|
|Empty class|923,125|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:37:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":41374367.25893699,"samples":6},{"name":"Object.create({})","opsSec":1250855.3394375884,"samples":3},{"name":"Cached Empty.prototype","opsSec":715010143.7508672,"samples":12},{"name":"Empty.prototype","opsSec":1294327.6540757637,"samples":3},{"name":"Empty class","opsSec":923125.0224780288,"samples":3}]}-->
