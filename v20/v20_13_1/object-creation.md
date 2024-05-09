## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|14,411,793|7205897|
|Object.create({})|1,878,343|939175|
|Cached Empty.prototype|19,824,384|9912193|
|Empty.prototype|1,921,634|960818|
|Empty class|1,280,617|640309|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:04:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":14411793.711767586,"samples":7205897},{"name":"Object.create({})","opsSec":1878343.940464206,"samples":939175},{"name":"Cached Empty.prototype","opsSec":19824384.61230238,"samples":9912193},{"name":"Empty.prototype","opsSec":1921634.9661597447,"samples":960818},{"name":"Empty class","opsSec":1280617.9923183767,"samples":640309}]}-->
