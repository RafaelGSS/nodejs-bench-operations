## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,027,270|23016721|
|Object.create({})|2,015,543|1008737|
|Cached Empty.prototype|111,061,733|55531392|
|Empty.prototype|2,183,711|1096235|
|Empty class|1,353,790|685211|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:19:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":46027270.29538063,"samples":23016721},{"name":"Object.create({})","opsSec":2015543.5607505587,"samples":1008737},{"name":"Cached Empty.prototype","opsSec":111061733.13388109,"samples":55531392},{"name":"Empty.prototype","opsSec":2183711.1955386084,"samples":1096235},{"name":"Empty class","opsSec":1353790.4862233354,"samples":685211}]}-->
