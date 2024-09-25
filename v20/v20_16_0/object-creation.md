## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,630,893|6815447|
|Object.create({})|1,832,227|918458|
|Cached Empty.prototype|17,432,982|8716492|
|Empty.prototype|1,784,517|892259|
|Empty class|1,196,529|598265|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:04:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":13630893.209414372,"samples":6815447},{"name":"Object.create({})","opsSec":1832227.918733083,"samples":918458},{"name":"Cached Empty.prototype","opsSec":17432982.849400353,"samples":8716492},{"name":"Empty.prototype","opsSec":1784517.5895597767,"samples":892259},{"name":"Empty class","opsSec":1196529.3155776346,"samples":598265}]}-->
