## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,221,803|86|
|Object.create({})|1,316,804|72|
|Cached Empty.prototype|829,213,184|86|
|Empty.prototype|1,242,879|72|
|Empty class|892,553|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":40221802.57848019,"samples":7},{"name":"Object.create({})","opsSec":1316803.5068797735,"samples":3},{"name":"Cached Empty.prototype","opsSec":829213183.6339893,"samples":6},{"name":"Empty.prototype","opsSec":1242879.4987261663,"samples":4},{"name":"Empty class","opsSec":892552.7432255788,"samples":3}]}-->
