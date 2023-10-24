## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|32,149,886|89|
|Object.create({})|965,459|72|
|Cached Empty.prototype|636,227,442|87|
|Empty.prototype|891,959|69|
|Empty class|650,607|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:59:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":32149885.553224612,"samples":6},{"name":"Object.create({})","opsSec":965458.7832299474,"samples":4},{"name":"Cached Empty.prototype","opsSec":636227441.990662,"samples":7},{"name":"Empty.prototype","opsSec":891959.255584631,"samples":4},{"name":"Empty class","opsSec":650607.3114520849,"samples":4}]}-->
