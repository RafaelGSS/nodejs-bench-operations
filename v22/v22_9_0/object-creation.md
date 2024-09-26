## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|39,013,954|19506983|
|Object.create({})|2,011,805|1005909|
|Cached Empty.prototype|65,741,477|32871532|
|Empty.prototype|2,488,878|1257003|
|Empty class|1,553,367|776715|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:23:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":39013954.52989737,"samples":19506983},{"name":"Object.create({})","opsSec":2011805.6555604972,"samples":1005909},{"name":"Cached Empty.prototype","opsSec":65741477.526664324,"samples":32871532},{"name":"Empty.prototype","opsSec":2488878.831844796,"samples":1257003},{"name":"Empty class","opsSec":1553367.085526302,"samples":776715}]}-->
