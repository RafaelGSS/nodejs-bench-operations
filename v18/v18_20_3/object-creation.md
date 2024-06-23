## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,715,639|6857820|
|Object.create({})|1,491,157|745579|
|Cached Empty.prototype|17,001,857|8500929|
|Empty.prototype|1,594,491|797246|
|Empty class|1,018,136|509069|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:55:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13715639.381932499,"samples":6857820},{"name":"Object.create({})","opsSec":1491157.0373252952,"samples":745579},{"name":"Cached Empty.prototype","opsSec":17001857.24268124,"samples":8500929},{"name":"Empty.prototype","opsSec":1594491.0166663758,"samples":797246},{"name":"Empty class","opsSec":1018136.6606899322,"samples":509069}]}-->
