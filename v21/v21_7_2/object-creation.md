## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|90,764,459|90|
|Object.create({})|2,888,218|88|
|Cached Empty.prototype|911,535,484|98|
|Empty.prototype|2,657,500|86|
|Empty class|1,675,246|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:50:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":90764459.25749423,"samples":5},{"name":"Object.create({})","opsSec":2888217.5781391487,"samples":3},{"name":"Cached Empty.prototype","opsSec":911535483.8559139,"samples":6},{"name":"Empty.prototype","opsSec":2657500.1215111143,"samples":4},{"name":"Empty class","opsSec":1675245.7137438282,"samples":3}]}-->
