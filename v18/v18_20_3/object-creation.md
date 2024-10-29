## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,320,533|22734647|
|Object.create({})|1,314,027|675839|
|Cached Empty.prototype|122,700,422|61398349|
|Empty.prototype|1,485,082|742549|
|Empty class|879,183|445734|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:16:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":45320533.24718198,"samples":22734647},{"name":"Object.create({})","opsSec":1314027.3657375183,"samples":675839},{"name":"Cached Empty.prototype","opsSec":122700422.5858231,"samples":61398349},{"name":"Empty.prototype","opsSec":1485082.4036645966,"samples":742549},{"name":"Empty class","opsSec":879183.428434414,"samples":445734}]}-->
