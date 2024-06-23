## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|16,573,683|8286842|
|Object.create({})|1,873,300|936651|
|Cached Empty.prototype|20,910,051|10455026|
|Empty.prototype|1,926,978|963490|
|Empty class|1,195,716|597859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:56:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":16573683.66616218,"samples":8286842},{"name":"Object.create({})","opsSec":1873300.6802057873,"samples":936651},{"name":"Cached Empty.prototype","opsSec":20910051.857450295,"samples":10455026},{"name":"Empty.prototype","opsSec":1926978.8213673283,"samples":963490},{"name":"Empty class","opsSec":1195716.8549962065,"samples":597859}]}-->
